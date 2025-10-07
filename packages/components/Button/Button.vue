<script setup lang="ts">
	import { ref, computed, inject } from 'vue'
	import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
	import { BUTTON_GROUP_CTX_KEY } from './constants'
	import { throttle } from 'lodash-es'
	import LeIcon from '../Icon/Icon.vue'
	defineOptions({
		name: 'LeButton',
	})
	const props = withDefaults(defineProps<ButtonProps>(), { // 默认值
		tag: 'button',
		nativeType: 'button', // 原生 button 的 type 属性
		useThrottle: true,
		throttleDuration: 500,
	})
	const emits = defineEmits<ButtonEmits>()
	const slots = defineSlots()
	const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0)

	const _ref = ref<HTMLButtonElement>()
	const size = computed(() => buttonGroupCtx?.size ?? props.size ?? '') // 尺寸 = 按钮组的尺寸（如果有） > 按钮自身的 size 属性 > 空字符串（默认）
	const type = computed(() => buttonGroupCtx?.type ?? props.type ?? '')
	const disabled = computed(
		() => props.disabled || buttonGroupCtx?.disabled || false
	)
	const iconStyle = computed(() => ({ // 图标样式
		marginRight: slots.default ? '6px' : '0px',
	}))

	const handleBtnClick = (e: MouseEvent) => { // 点击事件
		emits('click', e)
	}
	const handleBtnCLickThrottle = throttle( // 点击事件节流
		handleBtnClick,
		props.throttleDuration
	)

	defineExpose<ButtonInstance>({ // 暴露实例
		ref: _ref,
		disabled,
		size,
		type,
	})
</script>

<template>
	<component
		:is="tag"
		ref="_ref"
		class="le-button"
		:class="{
			[`le-button--${type}`]: type,
			[`le-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-float': float,
			'is-disabled': disabled,
			'is-loading': loading,
		}"
		:disabled="disabled || loading ? true : void 0"
		:type="tag === 'button' ? nativeType : void 0"
		:autofocus="autofocus"
		@click="
			(e: MouseEvent) =>
				useThrottle ? handleBtnCLickThrottle(e) : handleBtnClick(e)
		">
		<template v-if="loading">
			<slot name="loading">
				<le-icon
					class="loading-icon"
					:icon="loadingIcon ?? 'spinner'"
					:style="iconStyle"
					size="1x"
					spin />
			</slot>
		</template>
		<le-icon
			:icon="icon"
			size="1x"
			:style="iconStyle"
			v-if="icon && !loading" />
		<slot></slot>
	</component>
</template>

<style scoped>
	@import './style.scss';
</style>

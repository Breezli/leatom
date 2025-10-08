<script setup lang="ts">
	import { ref, computed } from 'vue'
	import type { InputProps, InputEmits, InputInstance } from './types'

	defineOptions({
		name: 'LeInput',
	})

	// Props - 移除了 sendText 和 sending
	const props = withDefaults(defineProps<InputProps>(), {
		type: 'text',
		modelValue: '',
		placeholder: '',
		disabled: false,
	})

	// Emits - 移除了 'send' 事件
	const emits = defineEmits<InputEmits>()

	// 引用
	const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>()

	// 是否显示密码
	const showPassword = ref(false)

	// 实际输入类型（用于 password-view）
	const inputType = computed(() => {
		if (props.type === 'password-view') {
			return showPassword.value ? 'text' : 'password'
		}
		return props.type === 'password' ? 'password' : 'text'
	})

	// 处理输入
	const handleInput = (event: Event) => {
		const value = (event.target as HTMLInputElement).value
		emits('update:modelValue', value)
		emits('input', value)
	}

	// 处理 change
	const handleChange = (event: Event) => {
		const value = (event.target as HTMLInputElement).value
		emits('change', value)
	}

	// 聚焦
	const handleFocus = (event: FocusEvent) => {
		emits('focus', event)
	}

	// 失焦
	const handleBlur = (event: FocusEvent) => {
		emits('blur', event)
	}

	// 暴露方法
	defineExpose<InputInstance>({
		focus: () => inputRef.value?.focus(),
		blur: () => inputRef.value?.blur(),
		select: () => inputRef.value?.select(),
	})
</script>

<template>
	<div
		:class="[
			'le-input',
			`le-input--${type}`,
			customClass,
			{ 'is-disabled': disabled },
		]"
		:style="customStyle">
		<!-- 普通输入框 & 密码框 -->
		<template v-if="type !== 'comment'">
			<input
				ref="inputRef"
				:value="modelValue"
				:type="inputType"
				:placeholder="placeholder"
				:disabled="disabled"
				class="le-input__input form-input-focus"
				@input="handleInput"
				@change="handleChange"
				@focus="handleFocus"
				@blur="handleBlur" />

			<!-- 密码可见性切换 -->
			<template v-if="type === 'password-view'">
				<button
					type="button"
					class="le-input__toggle-btn"
					@click="showPassword = !showPassword"
					:disabled="disabled">
					<le-icon
						:icon="showPassword ? 'eye-slash' : 'eye'"
						:color="disabled ? '#d1d5db' : '#9ca3af'"
						size="sm" />
				</button>
			</template>
		</template>

		<!-- 评论输入框 -->
		<template v-else>
			<textarea
				ref="inputRef"
				:value="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				class="le-input__textarea form-input-focus"
				rows="3"
				@input="handleInput"
				@change="handleChange"
				@focus="handleFocus"
				@blur="handleBlur" />
		</template>
	</div>
</template>

<style scoped>
	@import './style.scss';
</style>

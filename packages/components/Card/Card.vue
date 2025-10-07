<script setup lang="ts">
	import { ref, computed, inject } from 'vue'
	import type { CardProps, CardEmits, CardInstance } from './types'
	import { CARD_GROUP_CTX_KEY } from './constants'

	defineOptions({
		name: 'LeCard',
	})

	const props = withDefaults(defineProps<CardProps>(), {
		header: '',
		shadow: true,
		border: false,
		hover: false,
		hover_shadow: false,
		hover_scale: false,
		disabled: false,
		first: false,
		last: false,
	})
	const emits = defineEmits<CardEmits>()
	const slots = defineSlots()

	const cardGroupCtx = inject(CARD_GROUP_CTX_KEY, void 0)
	const inGroup = computed(() => !!cardGroupCtx)

	const _ref = ref<HTMLElement>()
	const disabled = computed(() => props.disabled || false)

	const handleCardClick = (e: MouseEvent) => {
		emits('click', e)
	}

	defineExpose<CardInstance>({
		ref: _ref,
		disabled,
		inGroup,
		first: computed(() => props.first && inGroup.value),
		last: computed(() => props.last && inGroup.value),
	})
</script>

<template>
	<div
		ref="_ref"
		class="le-card"
		:class="{
			'is-disabled': disabled,
			'is-border': border,
			'is-shadow': shadow,
			'is-hover': hover,
			'is-hover-scale': hover_scale && !disabled,
			'is-hover-shadow': hover_shadow && !disabled,
			'is-in-group': inGroup,
			'is-first': first,
			'is-last': last,
		}"
		v-bind="$attrs"
		@click="handleCardClick">
		<div v-if="header || $slots.header" class="le-card__header">
			<span v-if="header && !slots.header">{{ header }}</span>
			<slot name="header" />
			<slot name="header-extra" />
		</div>
		<div class="le-card__body">
			<slot />
		</div>
		<div v-if="footer || $slots.footer" class="le-card__footer">
			<span v-if="footer && !slots.footer">{{ footer }}</span>
			<slot name="footer" />
		</div>
	</div>
</template>

<style scoped>
	@import './style.scss';
</style>

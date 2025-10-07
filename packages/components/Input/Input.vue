<script setup lang="ts">
	import { ref } from 'vue'
	import type { SearchEmits, SearchProps } from './types'

	defineOptions({
		name: 'LeSearch',
	})

	const props = withDefaults(defineProps<SearchProps>(), {
		placeholder: '搜索文章、话题或用户',
		modelValue: '',
		disabled: false,
		container: true,
	})

	const emits = defineEmits<SearchEmits>()

	// 输入框引用
	const inputRef = ref<HTMLInputElement>()

	// 处理输入
	const handleInput = (event: Event) => {
		const value = (event.target as HTMLInputElement).value
		emits('update:modelValue', value)
		emits('input', value)
	}

	// 处理搜索（按回车）
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			emits('search', props.modelValue)
		}
	}

	// 处理聚焦
	const handleFocus = (event: FocusEvent) => {
		emits('focus', event)
	}

	// 处理失焦
	const handleBlur = (event: FocusEvent) => {
		emits('blur', event)
	}

	// 暴露方法
	defineExpose({
		focus: () => inputRef.value?.focus(),
		blur: () => inputRef.value?.blur(),
		clear: () => {
			emits('update:modelValue', '')
			emits('input', '')
		},
	})
</script>

<template>
	<div
		:class="[
			'le-search',
			customClass,
			{
				'is-container': container,
				'is-disabled': disabled,
			},
		]"
		:style="customStyle">
		<div class="le-search__wrapper">
			<input
				ref="inputRef"
				:value="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				type="text"
				class="le-search__input"
				@input="handleInput"
				@keydown="handleKeydown"
				@focus="handleFocus"
				@blur="handleBlur" />
			<i class="le-search__icon fas fa-search"></i>
		</div>
	</div>
</template>

<style scoped>
	@import './style.scss';
</style>

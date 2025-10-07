// types.ts (添加搜索相关类型)
export interface SearchProps {
	/**
	 * 占位符文本
	 * @default '搜索文章、话题或用户'
	 */
	placeholder?: string
	/**
	 * 输入框值
	 * @default ''
	 */
	modelValue?: string
	/**
	 * 是否禁用
	 * @default false
	 */
	disabled?: boolean
	/**
	 * 是否显示在容器中（响应式）
	 * @default true
	 */
	container?: boolean
	/**
	 * 自定义类名
	 */
	customClass?: string
	/**
	 * 自定义样式
	 */
	customStyle?: string | Record<string, any>
}

export interface SearchEmits {
	/**
	 * 输入框值更新时触发
	 */
	(e: 'update:modelValue', value: string): void
	/**
	 * 按下回车时触发
	 */
	(e: 'search', value: string): void
	/**
	 * 输入时触发
	 */
	(e: 'input', value: string): void
	/**
	 * 聚焦时触发
	 */
	(e: 'focus', value: FocusEvent): void
	/**
	 * 失焦时触发
	 */
	(e: 'blur', value: FocusEvent): void
}

export interface SearchInstance {
	/**
	 * 聚焦输入框
	 */
	focus: () => void
	/**
	 * 失焦输入框
	 */
	blur: () => void
	/**
	 * 清空输入框
	 */
	clear: () => void
}

// 定义 Props 类型
export interface SearchProps {
	// 占位符文本
	placeholder?: string
	// 输入框值
	modelValue?: string
	// 是否禁用
	disabled?: boolean
	// 是否显示在容器中（响应式）
	container?: boolean
	// 自定义类名
	customClass?: string
	// 自定义样式
	customStyle?: string | Record<string, any>
}

// 定义 Emits 类型
export interface SearchEmits {
	(e: 'update:modelValue', value: string): void
	(e: 'search', value: string): void
	(e: 'input', value: string): void
	(e: 'focus', value: FocusEvent): void
	(e: 'blur', value: FocusEvent): void
}

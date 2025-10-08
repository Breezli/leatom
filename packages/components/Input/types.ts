export type InputType = 'text' | 'password' | 'password-view' | 'comment'

export interface InputProps {
	/**
	 * 输入框类型
	 * @default 'text'
	 */
	type?: InputType
	/**
	 * 绑定值
	 */
	modelValue?: string
	/**
	 * 占位符
	 */
	placeholder?: string
	/**
	 * 是否禁用
	 * @default false
	 */
	disabled?: boolean
	/**
	 * 自定义类名
	 */
	customClass?: string | string[]
	/**
	 * 自定义样式
	 */
	customStyle?: Record<string, string>
}

export interface InputEmits {
	(e: 'update:modelValue', value: string): void
	(e: 'input', value: string): void
	(e: 'change', value: string): void
	(e: 'focus', event: FocusEvent): void
	(e: 'blur', event: FocusEvent): void
}

export interface InputInstance {
	focus: () => void
	blur: () => void
	select: () => void
}

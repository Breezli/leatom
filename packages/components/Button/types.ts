import { type Component, type ComputedRef, type Ref } from 'vue'
export type ButtonType = 'primary' | 'success' | 'elegant' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'default' | 'large' | 'small' | 'auto'

export interface ButtonProps { // 按钮属性
	tag?: string | Component
	type?: ButtonType
	size?: ButtonSize
	plain?: boolean
	round?: boolean
	circle?: boolean
	float?: boolean
	disabled?: boolean
	autofocus?: boolean
	nativeType?: NativeType
	icon?: string
	loading?: boolean
	loadingIcon?: string
	useThrottle?: boolean
	throttleDuration?: number
}

export interface ButtonGroupProps { // 按钮组属性
	size?: ButtonSize
	type?: ButtonType
	disabled?: boolean
}

export interface ButtonGroupContext { // 按钮组上下文
	size?: ButtonSize
	type?: ButtonType
	disabled?: boolean
}

export interface ButtonEmits { // 按钮事件
	(e: 'click', value: MouseEvent): void
}

export interface ButtonInstance { // 按钮实例
	ref: Ref<HTMLButtonElement | void> // 按钮元素的引用
	disabled: ComputedRef<boolean> // 计算属性，表示按钮是否禁用
	size: ComputedRef<string> // 计算属性，表示按钮的大小
	type: ComputedRef<string> // 计算属性，表示按钮的类型
}

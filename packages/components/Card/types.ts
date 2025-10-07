import type { Ref, ComputedRef } from 'vue'

export interface CardProps {
	// 标题（可选）
	header: string
	// 底部（可选）
	footer: string
	// 是否显示边框
	border: boolean
	// 是否显示阴影
	shadow: boolean
	// 是否具有悬停样式
	hover: boolean
	// 是否在悬停时显示阴影
	hover_shadow: boolean
	// 是否在悬停时放大
	hover_scale: boolean
	// 是否禁用
	disabled: boolean
	// 自定义类名
	customClass: string
	// 自定义样式
	customStyle: string | Record<string, any>
	// 是否在 CardGroup 中使用
	inGroup?: boolean
	// 是否是第一个卡片（仅在 CardGroup 中使用）
	first?: boolean
	// 是否是最后一个卡片（仅在 CardGroup 中使用）
	last?: boolean
}

export interface CardEmits { // 事件
	(e: 'click', value: MouseEvent): void
}

export interface CardInstance { // 实例
	ref: Ref<HTMLElement | void>
	disabled: ComputedRef<boolean>
	inGroup: ComputedRef<boolean>
	first: ComputedRef<boolean>
	last: ComputedRef<boolean>
}

export interface CardGroupContext {
	gap?: number
	compact?: boolean
	inGroup?: boolean
}

export interface CardGroupProps {
  /**
   * 卡片之间的间距（单位 px）
   * @default 16
   */
  gap?: number
  /**
   * 是否启用紧凑模式（小间距）
   * @default false
   */
  compact?: boolean
  inGroup?: boolean
}
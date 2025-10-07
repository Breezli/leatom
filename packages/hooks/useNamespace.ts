// packages/hooks/useNamespace.ts
import { computed } from 'vue'

/**
 * 创建 BEM 命名空间
 * @param block 块名
 */
export function useNamespace(block: string) {
	// 块名：le-button
	const b = computed(() => block)

	// 元素：le-button__inner
	const e = (element: string) => {
		return element ? `${block}__${element}` : ''
	}

	// 修饰符：le-button--primary
	const m = (modifier: string) => {
		return modifier ? `${block}--${modifier}` : ''
	}

	// 状态：is-disabled
	const is = (state: string) => {
		return state ? `is-${state}` : ''
	}

	return {
		b, // computed Ref
		e, // 普通函数
		m, // 普通函数
		is, // 普通函数
	}
}

import { defineConfig } from 'vitepress'
import {
	containerPreview,
	componentPreview,
} from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Leatom',
	description: '融合工程化实践与AI生产力的现代前端开发套件',
	appearance: false, // 是否允许用户切换深色/浅色模式，深色模式做好再开
	base: '/Leatom/',
	vite: {
		ssr: {
			noExternal: ['leatom'], // 组件库参与 SSR 构建
		},
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '组件', link: '/components/button' },
			{ text: '图标库', link: 'https://fontawesome.com/search' },
		],
		search: {
			provider: 'local',
		},
		sidebar: [
			{
				text: '',
				collapsed: false,
				items: [
					{ text: '组件总览', link: '/get-started' },
					{ text: '更新日志', link: 'components/button' },
				],
			},
			{
				text: '基础组件',
				collapsed: false,
				items: [
					{ text: 'Button 按钮', link: 'components/button' },
					{ text: 'Collapse 折叠面板', link: 'components/button' },
					{ text: 'Dropdown 下拉菜单', link: 'components/button' },

				],
			},			{
				text: '反馈组件',
				collapsed: false,
				items: [{ text: 'Alert 提示', link: 'components/alert' }],
			},
			{
				text: '数据展示',
				collapsed: false,
				items: [
					{ text: 'Tooltip 提示', link: 'components/tooltip' },
					{ text: 'Message 消息提示', link: 'components/message' },
					{ text: 'MessageBox 弹框', link: 'components/messagebox' },
				],
			},
			{
				text: 'Plus版',
				collapsed: false,
				items: [
					{ text: 'Button 按钮', link: 'components/button_plus' },
					{ text: 'Card 卡片', link: 'components/card_plus' },
					{ text: 'Input 输入框', link: 'components/input_plus' },
					{ text: 'Text 文本', link: 'components/text_plus' },
				],
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Breezli/Leatom' },
		],
	},
	markdown: {
		config(md) {
			md.use(containerPreview)
			md.use(componentPreview)
		},
	},
})

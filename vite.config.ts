// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()], // 插件配置
	base: process.env.NODE_ENV === 'production' ? '/leatom/' : '/', // 生产环境下，将基础路径设置为 '/leatom/'，开发环境下，将基础路径设置为 '/'
	css: {
		// CSS 配置
		preprocessorOptions: {
			scss: {
				// SCSS 配置
			},
		},
	},
})

import { defineConfig } from 'vite'
import { readdirSync, readdir } from 'fs'
import { resolve } from 'path'
import { defer, delay, filter, map, includes } from 'lodash-es'
import { visualizer } from 'rollup-plugin-visualizer'
import { hooksPlugin as hooks } from '@leatom/vite-plugins'
import shell from 'shelljs'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import terser from '@rollup/plugin-terser'

const TRY_MOVE_STYLES_DELAY = 750 as const // 尝试移动样式文件的延迟时间，单位毫秒

const isProd = process.env.NODE_ENV === 'production' // 生产环境
const isDev = process.env.NODE_ENV === 'development' // 开发环境
const isTest = process.env.NODE_ENV === 'test' // 测试环境

function getDirectoriesSync(basePath: string) {
	// 遍历目录，获取所有子文件夹名
	const entries = readdirSync(basePath, { withFileTypes: true })

	return map(
		filter(entries, (entry) => entry.isDirectory()),
		(entry) => entry.name
	)
}

function moveStyles() {
	// 将 dist/es/theme 移动到 dist 根目录，输出整理 CSS
	readdir('./dist/es/theme', (err) => {
		if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY)
		defer(() => shell.mv('./dist/es/theme', './dist'))
	})
}

export default defineConfig({
	plugins: [
		vue(),
		visualizer({
			// 可视化插件，生成构建体积报告，用于分析打包结果
			filename: 'dist/stats.es.html',
		}),
		dts({
			// 生成 .d.ts 类型文件，用于提供类型提示
			tsconfigPath: '../../tsconfig.build.json',
			outDir: 'dist/types',
		}),
		terser({
			// 压缩JS
			compress: {
				// 压缩代码
				sequences: isProd, // 生产环境下删除连续语句
				arguments: isProd, // 生产环境下删除函数参数
				drop_console: isProd && ['log'], // 生产环境下删除 console.log 语句
				drop_debugger: isProd, // 生产环境下删除 debugger 语句
				passes: isProd ? 4 : 1, // 生产环境下进行 4 次压缩，开发环境下进行 1 次压缩
				global_defs: {
					// 定义全局变量，用于在压缩代码时进行条件编译
					'@DEV': JSON.stringify(isDev),
					'@PROD': JSON.stringify(isProd),
					'@TEST': JSON.stringify(isTest),
				},
			},
			format: {
				// 格式化代码
				semicolons: false,
				shorthand: isProd,
				braces: !isProd,
				beautify: !isProd,
				comments: !isProd,
			},
			mangle: {
				// 压缩代码的变量名
				toplevel: isProd,
				eval: isProd,
				keep_classnames: isDev,
				keep_fnames: isDev,
			},
		}),
		hooks({
			// 在构建前后执行自定义操作（如清理旧文件、移动样式）
			rmFiles: [
				'./dist/es',
				'./dist/theme',
				'./dist/types',
				'./dist/stats.es.html',
			],
			afterBuild: moveStyles,
		}),
	],
	build: {
		outDir: 'dist/es',
		minify: 'terser',
		cssCodeSplit: true,
		sourcemap: !isProd,
		lib: {
			entry: resolve(__dirname, '../index.ts'),
			name: 'leatomUI',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			treeshake: true,
			external: [
				'vue',
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/free-solid-svg-icons',
				'@fortawesome/vue-fontawesome',
				'@popperjs/core',
				'async-validator',
			],
			output: {
				assetFileNames: (chunkInfo) => {
					if (chunkInfo.name === 'style.css') {
						return 'index.css'
					}
					if (
						chunkInfo.type === 'asset' &&
						/\.(css)$/i.test(chunkInfo.name as string)
					) {
						return 'theme/[name].[ext]'
					}
					return chunkInfo.name as string
				},
				manualChunks(id) {
					if (includes(id, 'node_modules')) return 'vendor'

					if (includes(id, '/packages/hooks')) return 'hooks'

					if (
						includes(id, '/packages/utils') ||
						includes(id, 'plugin-vue:export-helper')
					)
						return 'utils'

					for (const item of getDirectoriesSync('../components')) {
						if (includes(id, `/packages/components/${item}`)) return item
					}
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 可选：如果等有了全局的 SCSS 变量/混合，可在这里引入
				// additionalData: '@import "@/styles/variables.scss";'
			},
		},
	},
})

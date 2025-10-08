<template>
	<div style="display: flex; flex-direction: column; gap: 20px; padding: 20px">
		<!-- 第一行：Primary 和 Success -->
		<div style="display: flex; gap: 20px">
			<!-- Primary 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-primary 系列"
					:titleColor="`var(--le-color-primary-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-primary-dark-2)' }"
						@click="copyToClipboard('--le-color-primary-dark-2')">
						--le-color-primary-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-primary)' }"
						@click="copyToClipboard('--le-color-primary')">
						--le-color-primary
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{
							backgroundColor: `var(--le-color-primary-light-${i + 2})`,
						}"
						@click="copyToClipboard(`--le-color-primary-light-${i + 2}`)">
						--le-color-primary-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>

			<!-- Success 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-success 系列"
					:titleColor="`var(--le-color-success-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-success-dark-2)' }"
						@click="copyToClipboard('--le-color-success-dark-2')">
						--le-color-success-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-success)' }"
						@click="copyToClipboard('--le-color-success')">
						--le-color-success
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{
							backgroundColor: `var(--le-color-success-light-${i + 2})`,
						}"
						@click="copyToClipboard(`--le-color-success-light-${i + 2}`)">
						--le-color-success-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>
		</div>

		<!-- 第二行：Elegant 和 Danger -->
		<div style="display: flex; gap: 20px">
			<!-- Elegant 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-elegant 系列"
					:titleColor="`var(--le-color-elegant-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-elegant-dark-2)' }"
						@click="copyToClipboard('--le-color-elegant-dark-2')">
						--le-color-elegant-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-elegant)' }"
						@click="copyToClipboard('--le-color-elegant')">
						--le-color-elegant
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{
							backgroundColor: `var(--le-color-elegant-light-${i + 2})`,
						}"
						@click="copyToClipboard(`--le-color-elegant-light-${i + 2}`)">
						--le-color-elegant-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>

			<!-- Danger 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-danger 系列"
					:titleColor="`var(--le-color-danger-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-danger-dark-2)' }"
						@click="copyToClipboard('--le-color-danger-dark-2')">
						--le-color-danger-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-danger)' }"
						@click="copyToClipboard('--le-color-danger')">
						--le-color-danger
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{
							backgroundColor: `var(--le-color-danger-light-${i + 2})`,
						}"
						@click="copyToClipboard(`--le-color-danger-light-${i + 2}`)">
						--le-color-danger-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>
		</div>

		<!-- 第三行：Warning 和 Info -->
		<div style="display: flex; gap: 20px">
			<!-- Warning 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-warning 系列"
					:titleColor="`var(--le-color-warning-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-warning-dark-2)' }"
						@click="copyToClipboard('--le-color-warning-dark-2')">
						--le-color-warning-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-warning)' }"
						@click="copyToClipboard('--le-color-warning')">
						--le-color-warning
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{
							backgroundColor: `var(--le-color-warning-light-${i + 2})`,
						}"
						@click="copyToClipboard(`--le-color-warning-light-${i + 2}`)">
						--le-color-warning-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>

			<!-- Info 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-info 系列"
					:titleColor="`var(--le-color-info-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-info-dark-2)' }"
						@click="copyToClipboard('--le-color-info-dark-2')">
						--le-color-info-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-info)' }"
						@click="copyToClipboard('--le-color-info')">
						--le-color-info
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{ backgroundColor: `var(--le-color-info-light-${i + 2})` }"
						@click="copyToClipboard(`--le-color-info-light-${i + 2}`)">
						--le-color-info-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>
		</div>

		<!-- 第四行：Light 灰色系 -->
		<div style="display: flex; gap: 20px">
			<!-- Light 颜色组 -->
			<div style="width: 300px">
				<le-card-group
					title="--le-color-light 系列"
					:titleColor="`var(--le-color-light-dark-2)`">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-color-light-dark-2)' }"
						@click="copyToClipboard('--le-color-light-dark-2')">
						--le-color-light-dark-2
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-color-light)' }"
						@click="copyToClipboard('--le-color-light')">
						--le-color-light
					</le-card>
					<le-card
						v-for="i in 7"
						:key="i"
						hover
						:style="{ backgroundColor: `var(--le-color-light-light-${i + 2})` }"
						@click="copyToClipboard(`--le-color-light-light-${i + 2}`)">
						--le-color-light-light-{{ i + 2 }}
					</le-card>
				</le-card-group>
			</div>

			<!-- 全局语义色 -->
			<div style="width: 300px">
				<le-card-group title="全局语义色">
					<le-card
						hover
						first
						:style="{ backgroundColor: 'var(--le-text-color-primary)' }"
						@click="copyToClipboard('--le-text-color-primary')">
						--le-text-color-primary
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-text-color-secondary)' }"
						@click="copyToClipboard('--le-text-color-secondary')">
						--le-text-color-secondary
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-border-color)' }"
						@click="copyToClipboard('--le-border-color')">
						--le-border-color
					</le-card>
					<le-card
						hover
						:style="{ backgroundColor: 'var(--le-fill-color-light)' }"
						@click="copyToClipboard('--le-fill-color-light')">
						--le-fill-color-light
					</le-card>
					<le-card
						hover
						last
						:style="{ backgroundColor: 'var(--le-bg-color-page)' }"
						@click="copyToClipboard('--le-bg-color-page')">
						--le-bg-color-page
					</le-card>
				</le-card-group>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ColorPalette',
		methods: {
			/**
			 * 复制文本到剪贴板
			 * @param {string} text - 要复制的变量名
			 */
			async copyToClipboard(text) {
				try {
					await navigator.clipboard.writeText(text)
				    alert(`已复制变量名: ${text}`)
					// 可选：添加 UI 提示，如 ElMessage.success('已复制')
				} catch (err) {
					alert('复制失败:', err)
					// 降级方案：创建临时 input 并选中
					this.fallbackCopyTextToClipboard(text)
				}
			},

			/**
			 * 降级复制方法（兼容不支持 Clipboard API 的浏览器）
			 * @param {string} text
			 */
			fallbackCopyTextToClipboard(text) {
				const textArea = document.createElement('textarea')
				textArea.value = text
				textArea.style.position = 'fixed'
				textArea.style.top = '0'
				textArea.style.left = '0'
				textArea.style.width = '2em'
				textArea.style.height = '2em'
				textArea.style.padding = '0'
				textArea.style.border = 'none'
				textArea.style.outline = 'none'
				textArea.style.boxShadow = 'none'
				textArea.style.background = 'transparent'
				document.body.appendChild(textArea)
				textArea.focus()
				textArea.select()
				try {
					const successful = document.execCommand('copy')
					if (successful) {
						console.log(`✅ (降级) 已复制: ${text}`)
					} else {
						console.warn('❌ (降级) 复制失败')
					}
				} catch (err) {
					console.error('❌ (降级) 执行复制命令失败:', err)
				}
				document.body.removeChild(textArea)
			},
		},
	}
</script>
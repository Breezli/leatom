---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 快速开始

## 安装

```bash
pnpm install -D @leatom --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import LeatomUI from 'leatom'
// 引入样式
import 'leatom/dist/index.css'

import App from './App.vue'
// 全局使用
const app = createApp(App)
app.use(LeatomUI)
app.mount('#app')
```

```vue
<template>
	<le-button>我是 Button</le-button>
</template>
```

**单个导入**

leatom 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
	<le-button>我是 Button</le-button>
</template>
<script>
	import { LeButton } from ' leatom'
	export default {
		components: { LeButton },
	}
</script>
```

## 亮点

::: details

- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
- 当然，也会展示 发布“开箱即用” 的 npm 包
  :::

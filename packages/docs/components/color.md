---
title: Color
description: Color 组件文档

next:
  link: /components/button
  text: Button 按钮

prev:
  link: /components/other
  text: 其他组件
---

# LeDesign 主题色

本主题系统基于 `Sass` 构建，通过 CSS 变量（`--le-color-*`）实现可定制化的主题方案。支持 **主色扩展、明暗阶色系、全局语义色、字体、边框、动画** 等设计 token。

## 主题色 Palette

系统内置 7 种语义主题色，每种颜色均生成：

- 基础色（`--le-color-{name}`）
- 3~9 级 **亮色阶**（`--le-color-{name}-light-{3~9}`）
- 2 级 **暗色阶**（`--le-color-{name}-dark-2`）

> 使用 `color.mix()` 函数动态生成，确保色彩一致性。

### 主题色列表

| 颜色名称  | 变量名               | HEX 值    | 说明                                       |
| --------- | -------------------- | --------- | ------------------------------------------ |
| `primary` | `--le-color-primary` | `#3B82F6` | 主色调：现代蓝色，用于按钮、链接、高亮操作 |
| `success` | `--le-color-success` | `#10B981` | 成功色：绿色，用于成功状态、通过提示       |
| `elegant` | `--le-color-elegant` | `#6366F1` | 高雅紫：紫色，用于标签、徽章、个性化元素   |
| `danger`  | `--le-color-danger`  | `#EF4444` | 危险色：红色，用于删除、错误、警告操作     |
| `warning` | `--le-color-warning` | `#F59E0B` | 警告色：橙色，用于提醒、待处理状态         |
| `info`    | `--le-color-info`    | `#909399` | 信息色：中性灰，用于辅助信息、禁用态       |
| `light`   | `--le-color-light`   | `#F3F4F6` | 浅灰背景：用于卡片、容器背景               |

---

::: preview
demo-preview=../demo/color/Color.vue
:::

## 使用方式

### 在 CSS/SCSS 中使用

```scss
.my-button {
  background-color: var(--le-color-primary);
  color: var(--le-color-white);
  border: var(--le-border);
  border-radius: var(--le-border-radius-medium);
  transition: all var(--le-transition-duration-fast) ease;

  &:hover {
    background-color: var(--le-color-primary-dark-2);
  }
}
```

### 在 Vue 组件中使用（内联样式）

```vue
<template>
  <div
    :style="{
      backgroundColor: 'var(--le-color-success-light-9)',
      color: 'var(--le-color-success)',
      padding: '12px',
      borderRadius: 'var(--le-border-radius-base)'
    }">
    操作成功
  </div>
</template>
```

## 自定义主题

只需在你的项目根节点（如 `:root` 或 `html`）覆盖对应变量即可实现主题定制：

```css
:root {
  --le-color-primary: #409eff; /* 改为 Element 风格蓝 */
  --le-font-size-base: 16px;   /* 全局增大字体 */
  --le-border-radius-base: 8px; /* 更圆润的圆角 */
}
```





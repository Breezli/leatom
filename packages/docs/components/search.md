---
title: Search
description: Search 组件文档

next:
  link: /components/collapse
  text: Collapse 折叠面板

prev:
  link: /get-started
  text: 快速开始
---

# Search 搜索栏

常用的搜索栏组件。

## Default 默认

默认的搜索栏样式

::: preview
demo-preview=../demo/search/Default.vue
:::

## Container 容器适配

始终显示，适用于移动端或小屏

::: preview
demo-preview=../demo/search/Container.vue
:::

## Custom 自定义样式

自定义样式

::: preview
demo-preview=../demo/search/Custom.vue
:::

## Props 属性

| 属性名        | 说明                                                       | 类型                   | 默认值                   |
| ------------- | ---------------------------------------------------------- | ---------------------- | ------------------------ |
| `modelValue`  | 绑定的搜索值（支持 `v-model`）                             | `string`               | `''`                     |
| `placeholder` | 输入框占位符文本                                           | `string`               | `'搜索文章、话题或用户'` |
| `disabled`    | 是否禁用输入框                                             | `boolean`              | `false`                  |
| `container`   | 是否启用“容器模式”（仅在 `≥768px` 屏幕显示，且为弹性布局） | `boolean`              | `true`                   |
| `customClass` | 自定义类名（可传入字符串或数组）                           | `string   \| string[]` | —                        |
| `customStyle` | 自定义内联样式                                             | `object`               | —                        |

---

## Events 事件

| 事件名              | 说明                             | 回调参数              |
| ------------------- | -------------------------------- | --------------------- |
| `update:modelValue` | 输入内容变化时触发               | `(value: string)`     |
| `search`            | 用户输入后触发（输入时或按回车） | `(value: string)`     |
| `focus`             | 输入框获得焦点时触发             | `(event: FocusEvent)` |
| `blur`              | 输入框失去焦点时触发             | `(event: FocusEvent)` |

## Custom Style 样式类名

| 类名                  | 说明                       |
| --------------------- | -------------------------- |
| `.le-search`          | 组件根元素                 |
| `.le-search__wrapper` | 包裹输入框和图标的容器     |
| `.le-search__input`   | 实际的 `<input>` 元素      |
| `.le-search__icon`    | 搜索图标元素               |
| `.is-container`       | 启用容器模式（响应式隐藏） |
| `.is-disabled`        | 输入框禁用状态             |

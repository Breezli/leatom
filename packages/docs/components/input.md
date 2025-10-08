---
title: Input
description: Input 组件文档

next:
  link: /components/collapse
  text: Collapse 折叠面板

prev:
  link: /get-started
  text: 快速开始
---

# Input 输入框

常用的输入框组件。

## Default 默认

默认的输入框样式

::: preview
demo-preview=../demo/input/Default.vue
:::

## Form 表单输入框

表单式功能组件

::: preview
demo-preview=../demo/input/Form.vue
:::

## Comment 评论输入框

类似评论组件的高型输入框样式

::: preview
demo-preview=../demo/input/Comment.vue
:::

## Props 属性

| 属性          | 类型                                                | 默认值   | 是否必填 | 说明                                      |
| ------------- | --------------------------------------------------- | -------- | -------- | ----------------------------------------- |
| `type`        | `'text' | 'password' | 'password-view' | 'comment'` | `'text'` | 否       | 输入框类型，决定外观和行为                |
| `modelValue`  | `string`                                            | `''`     | 否       | 双向绑定的输入值，使用 `v-model` 绑定     |
| `placeholder` | `string`                                            | `''`     | 否       | 输入框占位提示文字                        |
| `disabled`    | `boolean`                                           | `false`  | 否       | 是否禁用输入框                            |
| `customClass` | `string | string[]`                                 | `-`      | 否       | 自定义类名，可用于扩展样式                |
| `customStyle` | `Record<string, string>`                            | `-`      | 否       | 内联样式对象，例如 `{ 'width': '300px' }` |

------

## Events 事件

| 事件名              | 回调参数              | 说明                                                   |
| ------------------- | --------------------- | ------------------------------------------------------ |
| `update:modelValue` | `(value: string)`     | `v-model` 双向绑定所依赖的更新事件，输入内容变化时触发 |
| `input`             | `(value: string)`     | 原生 input 事件，输入过程中实时触发                    |
| `change`            | `(value: string)`     | 原生 change 事件，输入框失焦且内容改变时触发           |
| `focus`             | `(event: FocusEvent)` | 获得焦点时触发                                         |
| `blur`              | `(event: FocusEvent)` | 失去焦点时触发                                         |


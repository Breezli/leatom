---
title: Card
description: Card 组件文档

next:
  link: /components/card
  text: Card 卡片

prev:
  link: /get-started
  text: 快速开始
---

# Card 卡片

## Default Card

默认卡片，支持 header & footer，支持插入文字/图片/链接等内容

::: preview
demo-preview=../demo/card/Default.vue
:::

## Disabled Card

禁用卡片

::: preview
demo-preview=../demo/card/Disabled.vue
:::

## Only body Card

只有主体的卡片

::: preview
demo-preview=../demo/card/NoHeader.vue
:::

## Hover Card

Hover 状态下的卡片

::: preview
demo-preview=../demo/card/Hover.vue
:::

## Header Slot

自定义 header 样式 (具名插槽)

::: preview
demo-preview=../demo/card/Header.vue
:::

## Card Group

卡片组

::: preview
demo-preview=../demo/card/Group.vue
:::

##  LeCard API

### Props

| Name         | Description                                   | Type                           | Default |
| ------------ | --------------------------------------------- | ------------------------------ | ------- |
| header       | 卡片标题（可选）                              | `string`                       | `''`    |
| footer       | 卡片底部内容（可选）                          | `string`                       | `''`    |
| border       | 是否显示边框                                  | `boolean`                      | `false` |
| shadow       | 是否默认显示阴影                              | `boolean`                      | `true`  |
| hover        | 是否启用悬停样式                  | `boolean`                      | `false` |
| hover_shadow | 是否在悬停时显示阴影       | `boolean`                      | `false` |
| hover_scale  | 是否在悬停时放大          | `boolean`                      | `false` |
| disabled     | 是否禁用卡片                                  | `boolean`                      | `false` |
| customClass  | 自定义类名                                    | `string`                       | `''`    |
| customStyle  | 自定义内联样式                                | `string` | `Record<string, any>` | `''`    |
| first        | 是否为第一个卡片（仅在 `CardGroup` 中使用）   | `boolean`                      | `false` |
| last         | 是否为最后一个卡片（仅在 `CardGroup` 中使用） | `boolean`                      | `false` |

> ⚠️ **说明**：
>
> - `first` 和 `last` 由外部手动传入，用于实现 **融合圆角** 样式。
> - `inGroup` 不作为 prop 暴露，由 `CardGroup` 通过 inject 提供上下文。

------

### Events

| Name  | Description    | Type                          |
| ----- | -------------- | ----------------------------- |
| click | 卡片点击时触发 | `(event: MouseEvent) => void` |

------

### Slots

| Name         | Description          |
| ------------ | -------------------- |
| default      | 卡片主体内容插槽     |
| header       | 自定义标题插槽       |
| header-extra | 标题右侧额外内容插槽 |
| footer       | 自定义底部内容插槽   |

------

### Expose

| Name     | Description           | Type                   |
| -------- | --------------------- | ---------------------- |
| ref      | 卡片根元素的 DOM 引用 | `Ref<HTMLElement>`     |
| disabled | 卡片的禁用状态        | `ComputedRef<boolean>` |

------

## LeCardGroup API

### Props

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ------- |
| —    | 无 props    | —    | —       |

> 🔹 **说明**：`CardGroup` 仅作为上下文容器，不接收任何 props（你当前实现如此）。
>  如需支持 `gap` 或 `size`，可后续扩展。

------

### Slots

| Name    | Description            | Sub Component |
| ------- | ---------------------- | ------------- |
| default | 默认插槽，用于放置卡片 | `LeCard`      |

---
title: Icon
description: Icon 组件文档

next:
  link: /components/button
  text: Button 按钮

prev:
  link: /components/other
  text: 其他组件
---

# Icon 图标

基于 [Font Awesome](https://fontawesome.com.cn/v5) 的图标库，提供丰富的图标选择，方便在项目中使用。

::: preview
demo-preview=../demo/icon/Icon.vue
:::

::: preview
demo-preview=../demo/icon/Button.vue
:::

## 注意事项

1. 确保项目中已正确引入 Font Awesome 样式文件。
2. 如果需要使用 Pro 版本的图标，请参考 [Font Awesome 官方文档](https://fontawesome.com.cn/v5) 进行配置。
3. 图标名称需与 Font Awesome 的类名保持一致，例如：`fa-user`、`fa-home` 等。

::: tip
可以通过组合 `size` 和 `color` 属性快速调整图标样式，满足不同场景需求。
:::

## Props 属性

| 属性名        | 说明                                 | 类型                                                    | 默认值  |
| ------------- | ------------------------------------ | ------------------------------------------------------- | ------- |
| `type`        | 主题类型，快速应用项目预设颜色       | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| `color`       | 自定义图标颜色（优先级高于 `type`）  | `string`                                                | —       |
| `size`        | 图标尺寸                             | `'2xs' \| 'xs' \| 'sm' \| 'lg' ... '10x'`                  | —       |
| `spin`        | 是否启用旋转动画                     | `boolean`                                               | `false` |
| `pulse`       | 是否启用脉冲动画                     | `boolean`                                               | `false` |
| `rotation`    | 旋转角度（90/180/270）               | `90 \| 180 \| 270 \| '90' \| '180' \| '270'`                 | —       |
| `flip`        | 翻转方向                             | `'horizontal' \| 'vertical' \| 'both'`                    | —       |
| `pull`        | 图标浮动方向                         | `'left' \| 'right'`                                      | —       |
| `border`      | 是否显示边框                         | `boolean`                                               | `false` |
| `fixedWidth`  | 是否固定宽度（对齐图标列时有用）     | `boolean`                                               | `false` |
| `listItem`    | 是否作为列表项图标                   | `boolean`                                               | `false` |
| `mask`        | 遮罩图标（用于组合图标）             | `string \| Array<string> \| object`                       | —       |
| `swapOpacity` | 是否启用透明度交换（用于图层图标）   | `boolean`                                               | `false` |
| `transform`   | 自定义变换（缩放、位移等）           | `string \| object`                                       | —       |
| `symbol`      | 是否注册为 symbol（用于 SVG sprite） | `boolean \| string`                                      | `false` |
| `title`       | 图标标题（辅助功能）                 | `string`                                                | —       |
| `inverse`     | 是否反色（用于深色背景）             | `boolean`                                               | `false` |
| `bounce`      | 是否启用弹跳动画                     | `boolean`                                               | `false` |
| `shake`       | 是否启用抖动动画                     | `boolean`                                               | `false` |
| `beat`        | 是否启用心跳动画                     | `boolean`                                               | `false` |
| `fade`        | 是否启用淡入动画                     | `boolean`                                               | `false` |
| `beatFade`    | 是否启用渐强渐弱动画                 | `boolean`                                               | `false` |
| `spinPulse`   | 是否启用脉冲旋转动画                 | `boolean`                                               | `false` |
| `spinReverse` | 是否反向旋转                         | `boolean`                                               | `false` |

> ✅ 所有未列出的 Font Awesome 图标属性均支持，通过 `v-bind` 传递。

## 主题颜色 (`type`)

使用 `type` 属性可快速应用项目中定义的主题色：

| 值        | 颜色变量                  | 示例用途       |
| --------- | ------------------------- | -------------- |
| `primary` | `var(--le-color-primary)` | 主要操作       |
| `success` | `var(--le-color-success)` | 成功状态       |
| `warning` | `var(--le-color-warning)` | 警告提示       |
| `danger`  | `var(--le-color-danger)`  | 错误或删除操作 |
| `info`    | `var(--le-color-info)`    | 信息提示       |

> 💡 若同时设置 `color`，则 `color` 优先级更高。
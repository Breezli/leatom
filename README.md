### 项目简介

技术栈：**Vue 3 + TypeScript + Vite**

### 开发人员

依赖

```
pnpm install
```

构建

```
pnpm build
```

文档预览

```
pnpm docs:dev
```

```
Leatom
├─ env.d.ts
├─ libs
│  ├─ README.md
│  ├─ vite-plugins
│  │  ├─ hooksPlugin.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ vite.config.ts
│  └─ vitepress-preview-component
│     ├─ container
│     │  ├─ ant-design-ui
│     │  │  ├─ ant-design.scss
│     │  │  └─ AntDesign.vue
│     │  ├─ element-plus
│     │  │  ├─ element-plus.scss
│     │  │  └─ ElementPlus.vue
│     │  └─ naive-ui
│     │     ├─ naive-ui.scss
│     │     └─ NaiveUI.vue
│     ├─ hooks
│     │  ├─ use-codecopy.ts
│     │  ├─ use-codefold.ts
│     │  └─ use-namespaces.ts
│     ├─ icons
│     │  ├─ code-close.vue
│     │  ├─ code-copy.vue
│     │  ├─ code-open.vue
│     │  └─ copy-success.vue
│     ├─ index.ts
│     ├─ messages
│     │  ├─ index.ts
│     │  ├─ message-notice.scss
│     │  └─ message-notice.vue
│     ├─ package.json
│     ├─ styles
│     │  ├─ JetBrainsMono-Medium.ttf
│     │  └─ various.scss
│     ├─ tsconfig.json
│     ├─ types.d.ts
│     └─ vite.config.ts
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.vue
│  │  │  ├─ ButtonGroup.vue
│  │  │  ├─ constants.ts
│  │  │  ├─ index.ts
│  │  │  ├─ style.scss
│  │  │  └─ types.ts
│  │  ├─ Button_Plus
│  │  │  ├─ ButtonPlus.vue
│  │  │  ├─ Buttons
│  │  │  │  ├─ Interactive.vue
│  │  │  │  ├─ Rainbow.vue
│  │  │  │  └─ Ripple.vue
│  │  │  ├─ index.ts
│  │  │  ├─ style.css
│  │  │  └─ types.ts
│  │  ├─ Card
│  │  │  ├─ Card.vue
│  │  │  ├─ style.scss
│  │  │  └─ types.ts
│  │  ├─ Icon
│  │  │  ├─ Icon.vue
│  │  │  ├─ index.ts
│  │  │  ├─ style.scss
│  │  │  └─ types.ts
│  │  ├─ index.ts
│  │  ├─ Input
│  │  ├─ Input_Plus
│  │  │  ├─ index.ts
│  │  │  ├─ InputPlus.vue
│  │  │  ├─ style.css
│  │  │  └─ types.ts
│  │  ├─ Message
│  │  │  ├─ index.ts
│  │  │  ├─ Message.test.tsx
│  │  │  ├─ Message.vue
│  │  │  ├─ methods.ts
│  │  │  ├─ style.css
│  │  │  └─ types.ts
│  │  └─ package.json
│  ├─ constants
│  │  ├─ index.ts
│  │  ├─ key.ts
│  │  └─ package.json
│  ├─ core
│  │  ├─ .npmignore
│  │  ├─ build
│  │  │  ├─ vite.es.config.ts
│  │  │  ├─ vite.es.config.ts.timestamp-1743226158611-4382f0283d001.mjs
│  │  │  ├─ vite.es.config.ts.timestamp-1743387874260-8a41680553f4c.mjs
│  │  │  └─ vite.umd.config.ts
│  │  ├─ components.ts
│  │  ├─ index.ts
│  │  ├─ makeInstaller.ts
│  │  ├─ package.json
│  │  └─ pringLogo.ts
│  ├─ docs
│  │  ├─ .vitepress
│  │  │  ├─ components
│  │  │  │  └─ HomeHero.vue
│  │  │  ├─ config.mts
│  │  │  └─ theme
│  │  │     ├─ index.ts
│  │  │     └─ styles
│  │  │        ├─ custom.css
│  │  │        └─ LXGWWenKaiMonoLite-Medium.ttf
│  │  ├─ api-examples.md
│  │  ├─ components
│  │  │  ├─ button.md
│  │  │  ├─ button_plus.md
│  │  │  ├─ card.md
│  │  │  ├─ color.md
│  │  │  ├─ icon.md
│  │  │  ├─ input_plus.md
│  │  │  └─ message.md
│  │  ├─ demo
│  │  │  ├─ button
│  │  │  │  ├─ Basic.vue
│  │  │  │  ├─ Disabled.vue
│  │  │  │  ├─ Float.vue
│  │  │  │  ├─ Group.vue
│  │  │  │  ├─ Icon.vue
│  │  │  │  ├─ Loading.vue
│  │  │  │  ├─ Size.vue
│  │  │  │  ├─ Tag.vue
│  │  │  │  └─ Throttle.vue
│  │  │  ├─ buttonplus
│  │  │  │  ├─ Interactive.vue
│  │  │  │  ├─ Rainbow.vue
│  │  │  │  └─ Ripple.vue
│  │  │  ├─ card
│  │  │  │  └─ Article.vue
│  │  │  ├─ icon
│  │  │  │  └─ Icon.vue
│  │  │  ├─ inputplus
│  │  │  │  └─ Hover.vue
│  │  │  └─ message
│  │  │     ├─ Basic.vue
│  │  │     ├─ Center.vue
│  │  │     ├─ Closeable.vue
│  │  │     ├─ Test.vue
│  │  │     └─ Type.vue
│  │  ├─ get-started.md
│  │  ├─ index.md
│  │  ├─ markdown-examples.md
│  │  └─ package.json
│  ├─ hooks
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  ├─ useEventListener.ts
│  │  ├─ useId.ts
│  │  ├─ useOffset.ts
│  │  └─ useZIndex.ts
│  ├─ play
│  │  ├─ .storybook
│  │  │  ├─ main.ts
│  │  │  └─ preview.ts
│  │  ├─ index.html
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ App.vue
│  │  │  ├─ main.ts
│  │  │  └─ stories
│  │  │     └─ Button.stories.ts
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.json
│  │  ├─ tsconfig.node.json
│  │  └─ vite.config.ts
│  ├─ theme
│  │  ├─ index.scss
│  │  ├─ package.json
│  │  └─ reset.css
│  └─ utils
│     ├─ index.ts
│     ├─ install.ts
│     └─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.build.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ vitest.config.ts
└─ vitest.setup.ts

```
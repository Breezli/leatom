import type { Preview } from '@storybook/vue3-vite'
import '@leatom/theme/index.scss' // 引入 Leatom 组件库的样式
import '../styles/custom.css' // 引入自定义样式

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    staticDirs: ['../public'],
  },
};

export default preview;
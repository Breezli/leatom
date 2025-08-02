import DefaultTheme from 'vitepress/theme'
import Theme from 'vitepress/theme'
import { type App } from 'vue'
import HomeHero from '../components/HomeHero.vue'
import LeatomUI from 'leatom'
// import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
// import { NaiveUIContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import './styles/custom.css'
import 'leatom/dist/index.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		// app.component('demo-preview', ElementPlusContainer)
		app.component('demo-preview', AntDesignContainer)
		// app.component('demo-preview', NaiveUIContainer)
		app.use(LeatomUI)
	},
}

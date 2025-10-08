import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { LeCard, LeButton, LeIcon, LeCardGroup } from '@leatom/components'
import 'leatom/dist/theme/Card.css'

type Story = StoryObj<typeof LeCard> & { argTypes?: ArgTypes }

const meta: Meta<typeof LeCard> = {
	title: 'Example/Card',
	component: LeCard as any,
	tags: ['autodocs'],
	argTypes: {
		header: {
			control: { type: 'text' },
		},
		border: {
			control: 'boolean',
		},
		shadow: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		hover: {
			control: 'boolean',
		},
		hover_shadow: {
			control: 'boolean',
		},
		hover_scale: {
			control: 'boolean',
		},
		first: {
			control: 'boolean',
		},
		last: {
			control: 'boolean',
		},
		customClass: {
			control: { type: 'text' },
		},
		customStyle: {
			control: 'object',
		},
		onClick: {
			action: 'clicked',
		},
	},
	args: {
		onClick: fn(), // 自动记录点击事件
	},
}

export default meta

// 辅助函数：包裹 margin，便于预览
const container = (val: string) => `
  <div style="margin: 10px;">
    ${val}
  </div>
`

export const Default: Story & { args: { header: string } } = {
	argTypes: {
		header: {
			control: { type: 'text' },
			description: 'title',
		},
	},
	args: {
		header: 'Title',
		border: false,
		shadow: true,
		disabled: false,
	},
	render: (args: any) => ({
		components: { LeCard },
		setup() {
			return { args }
		},
		template: container(`
      <div style="width:300px">
        <le-card v-bind="args">
            这是一个基础卡片，包含默认插槽内容。
        </le-card>
      </div>
    `),
	})
}

export const WithHeaderSlot: Story = {
	args: {
		border: true,
		shadow: true,
	},
	render: (args: any) => ({
		components: { LeCard, LeButton, LeIcon },
		setup() {
			return { args }
		},
		template: container(`
    <div style="width:300px">       
      <le-card v-bind="args">
        <template #header>
            <span style="color: #409EFF;font-weight: bold;">自定义Header(具名插槽)</span>
        </template>
        <template #header-extra>
            <le-button size="small" round @click="$emit('click', $event)">修改</le-button>
        </template>
        这是一个使用 header 插槽的卡片
        <template #footer>
            <p>
                <le-button size="small" icon="search" circle />
                <le-button size="small" icon="edit" circle />
                <le-button size="small" icon="check" circle />
                <le-button size="small" icon="link" circle />
                <le-button size="small" icon="message" circle />
            </p>
        </template>
      </le-card>
    </div>
    `),
	}),
}

export const WithFooter: Story = {
	args: {
		header: '卡片标题',
		border: true,
		shadow: true,
	},
	render: (args: any) => ({
		components: { LeCard },
		setup() {
			return { args }
		},
		template: container(`
    <div style="width:300px">        
      <le-card v-bind="args">
        卡片主体内容。
        <template #footer>
          <div style="text-align: right;">
            <small>更新于 2025-10-06</small>
          </div>
        </template>
      </le-card>
    </div>
    `),
	}),
}

export const Disabled: Story = {
	args: {
		header: '禁用的卡片',
		disabled: true,
		shadow: false,
	},
	render: (args: any) => ({
		components: { LeCard },
		setup() {
			return { args }
		},
		template: container(`
    <div style="width:300px">        
      <le-card v-bind="args" style="opacity: 0.6; cursor: not-allowed;">
        该卡片处于禁用状态，不可交互。
      </le-card>
    </div>
    `),
	})
}

export const CustomStyle: Story = {
	args: {
		header: '自定义样式卡片',
		customClass: 'custom-card-class',
		customStyle: { background: '#f0f9ff', border: '1px solid #d9ecff' },
	},
	render: (args: any) => ({
		components: { LeCard },
		setup() {
			return { args }
		},
		template: container(`
    <div style="width:300px">
      <le-card 
        :customClass="args.customClass" 
        :customStyle="args.customStyle"
        :header="args.header"
        @click="args.onClick"
      >
        应用了自定义类名和内联样式的卡片。
        <img src="https://bu.dusays.com/2025/09/26/68d6788b5c247.ico"></img>
      </le-card>
    </div>
    `),
	}),
}

export const NoHeader: Story = {
	args: {
		shadow: false,
	},
	render: (args: any) => ({
		components: { LeCard },
		setup() {
			return { args }
		},
		template: container(`
    <div style="width:300px">
      <le-card v-bind="args">
        此卡片没有 header，只有 body 内容。
      </le-card>
    </div>
    `),
	}),
}

export const CardGroup: Story = {
	args: {
		shadow: true,
	},
	render: (args: any) => ({
		components: { LeCard, LeCardGroup },
		setup() {
			return { args }
		},
		template: container(`
        <div style="width:300px">
            <le-card-group>
                <le-card hover first>内容 1</le-card>
                <le-card hover>内容 2</le-card>
                <le-card hover last>内容 3</le-card>
            </le-card-group>
        </div>
    `),
	}),
}

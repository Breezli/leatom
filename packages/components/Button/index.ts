import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@leatom/utils'

export const LeButton = withInstall(Button)
export const LeButtonGroup = withInstall(ButtonGroup)

export * from './types'

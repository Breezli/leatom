import Card from './Card.vue'
import CardGroup from './CardGroup.vue'
import { withInstall } from '@leatom/utils'

export const LeCard = withInstall(Card)
export const LeCardGroup = withInstall(CardGroup)

export * from './types'

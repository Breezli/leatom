import Message from './methods'
import { withInstallFunction } from '@leatom/utils'

export const LeMessage = withInstallFunction(Message, '$message')

export * from './types'

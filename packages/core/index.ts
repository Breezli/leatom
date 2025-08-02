import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import makeInstaller from './makeInstaller'
import components from './components'
import printLogo from './pringLogo'
import '@leatom/theme/index.scss'

printLogo()

library.add(fas)
const installer = makeInstaller(components)

// export * from '@leatom/locale'
export * from '@leatom/components'
export default installer

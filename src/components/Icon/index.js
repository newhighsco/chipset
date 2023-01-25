import { withTheme } from '../../providers'
import PureIcon from './Icon'
import theme from './Icon.module.scss'

const { displayName } = PureIcon
const Icon = withTheme(displayName, theme)(PureIcon)

Icon.displayName = displayName

export default Icon

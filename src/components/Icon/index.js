import { withTheme } from '../../providers'
import { ICON } from '../identifiers'
import PureIcon from './Icon'

import theme from './Icon.module.scss'

const Icon = withTheme(ICON, theme)(PureIcon)

export default Icon

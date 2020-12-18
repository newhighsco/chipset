import { withTheme } from '../../providers'
import PureNavigation from './Navigation'

import theme from './Navigation.module.scss'

const { displayName } = PureNavigation
const Navigation = withTheme(displayName, theme)(PureNavigation)

export default Navigation

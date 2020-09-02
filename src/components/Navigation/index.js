import { withTheme } from '../../providers'
import { NAVIGATION } from '../identifiers'
import PureNavigation from './Navigation'

import theme from './Navigation.module.scss'

const Navigation = withTheme(NAVIGATION, theme)(PureNavigation)

export default Navigation

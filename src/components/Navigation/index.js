import { withTheme } from '../../providers'
import { NAVIGATION } from '../identifiers'
import { Navigation } from './Navigation'

import theme from './Navigation.module.scss'

const WithTheme = withTheme(NAVIGATION, theme)(Navigation)

export default WithTheme
export { WithTheme as Navigation }

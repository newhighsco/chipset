import { withTheme } from '../../providers'
import { ICON } from '../identifiers'
import { Icon } from './Icon'

import theme from './base.module.scss'

const WithTheme = withTheme(ICON, theme)(Icon)

export default WithTheme
export { WithTheme as Icon }

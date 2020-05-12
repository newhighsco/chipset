import { withTheme } from '../../providers'
import { BUTTON } from '../identifiers'
import { Button, ButtonGroup } from './Button'

import theme from './Button.module.scss'

const WithThemeItem = withTheme(BUTTON, theme)(Button)
const WithThemeWrapper = withTheme(BUTTON, theme)(ButtonGroup)

export default WithThemeItem
export { WithThemeItem as Button, WithThemeWrapper as ButtonGroup }

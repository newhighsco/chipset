import { withTheme } from '../../providers'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'

import theme from './Button.module.scss'

const { displayName } = PureButton
const Button = withTheme(displayName, theme)(PureButton)
const ButtonGroup = withTheme(displayName, theme)(PureButtonGroup)

Button.Group = ButtonGroup

export default Button

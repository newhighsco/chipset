import { withTheme } from '../../providers'
import { BUTTON } from '../identifiers'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'

import theme from './Button.module.scss'

const Button = withTheme(BUTTON, theme)(PureButton)
const ButtonGroup = withTheme(BUTTON, theme)(PureButtonGroup)

Button.Group = ButtonGroup

export default Button

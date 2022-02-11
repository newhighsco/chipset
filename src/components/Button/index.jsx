import React, { forwardRef } from 'react'
import { withTheme } from '../../providers'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'

import theme from './Button.module.scss'

const { displayName } = PureButton
const ButtonWithRef = forwardRef((props, ref) => (
  <PureButton {...props} setRef={ref} />
))
const Button = withTheme(displayName, theme)(ButtonWithRef)
const ButtonGroup = withTheme(displayName, theme)(PureButtonGroup)

Button.displayName = displayName
ButtonGroup.displayName = `${displayName}.Group`

Button.Group = ButtonGroup

export default Button

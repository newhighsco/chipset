import React, { forwardRef } from 'react'
import { withTheme } from '../../providers'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'
import { ButtonProps, ButtonGroupProps } from './Button.types'

import theme from './Button.module.scss'

const { displayName } = PureButton
const ButtonWithRef = forwardRef<typeof PureButton, ButtonProps>(
  (props, ref) => {
    return <PureButton {...props} setRef={ref} />
  }
)

const Button = withTheme(displayName, theme)(ButtonWithRef)
const ButtonGroup = withTheme(displayName, theme)(PureButtonGroup)

Button.displayName = displayName
ButtonGroup.displayName = `${displayName}.Group`

Button.Group = ButtonGroup

export default Button
export type { ButtonProps, ButtonGroupProps }

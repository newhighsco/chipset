import React, { FC } from 'react'
import { ElementProps } from './Element.types'

const Element: FC<ElementProps> = ({ as: Component = 'div', ...rest }) => (
  <Component {...rest} />
)

export default Element

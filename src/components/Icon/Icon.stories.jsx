import React from 'react'

import { Icon } from '..'
import { ReactComponent as MenuSvg } from '../Navigation/images/menu.svg'

export default {
  component: Icon,
  parameters: { chromatic: { disable: true } }
}

export const Source = { args: { children: <svg /> } }

export const Decorative = { args: { children: <MenuSvg /> } }

export const Accessible = { args: { ...Decorative.args, alt: 'Alt text' } }

export const WithWidth = { args: { ...Decorative.args, width: 24 } }

export const WithWidthAndHeight = { args: { ...WithWidth.args, height: 48 } }

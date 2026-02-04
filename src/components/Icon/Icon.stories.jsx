import { snapshot } from '@newhighsco/storybook-preset'
import React from 'react'

import { ImageSvg } from '../../__mocks__/fixtures'
import { Icon } from '..'

export default { component: Icon }

export const Source = { args: { children: <svg /> } }

export const Decorative = { args: { children: <ImageSvg /> } }

export const Accessible = { args: { ...Decorative.args, alt: 'Alt text' } }

export const WithWidth = { args: { ...Accessible.args, width: 24 } }

export const WithWidthAndHeight = { args: { ...WithWidth.args, height: 48 } }

export const WithColor = {
  args: { ...WithWidthAndHeight.args, style: { color: 'red' } }
}

export const Snapshot = snapshot(
  [Decorative, Accessible, WithWidth, WithWidthAndHeight, WithColor],
  { decorator: storyFn => <div>{storyFn}</div> }
)

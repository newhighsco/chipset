import { snapshot } from '@newhighsco/storybook-preset'

import { Icon } from '..'

export default { component: Icon }

export const Source = { args: { name: 'name' } }

export const Decorative = {
  args: { name: 'material-symbols:menu', style: { outline: '1px dashed' } }
}

export const Accessible = { args: { ...Decorative.args, alt: 'Alt text' } }

export const WithColor = {
  args: {
    ...Accessible.args,
    style: { ...Accessible.args.style, color: 'red' }
  }
}

export const WithWidth = { args: { ...Accessible.args, width: 24 } }

export const WithHeight = { args: { ...Accessible.args, height: 48 } }

export const WithWidthAndHeight = {
  args: { ...WithWidth.args, ...WithHeight.args }
}

export const Invalid = { args: { ...Accessible.args, name: 'nonexistent' } }

export const InvalidWithWidth = { args: { ...WithWidth.args, ...Invalid.args } }

export const InvalidWithHeight = {
  args: { ...WithHeight.args, ...Invalid.args }
}

export const InvalidWithWidthAndHeight = {
  args: { ...WithWidthAndHeight.args, ...Invalid.args }
}

export const Snapshot = snapshot(
  [
    Decorative,
    Accessible,
    WithColor,
    Invalid,
    WithWidth,
    InvalidWithWidth,
    WithHeight,
    InvalidWithHeight,
    WithWidthAndHeight,
    InvalidWithWidthAndHeight
  ],
  { decorator: storyFn => <div>{storyFn}</div> }
)

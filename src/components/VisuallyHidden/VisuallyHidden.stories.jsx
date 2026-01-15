import { VisuallyHidden } from '..'

export default { component: VisuallyHidden }

export const Source = {
  args: { children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const Example = { args: Source.args }

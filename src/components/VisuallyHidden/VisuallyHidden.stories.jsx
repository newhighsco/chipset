import { VisuallyHidden } from '..'

export default {
  component: VisuallyHidden,
  parameters: { chromatic: { disable: true } }
}

export const Source = { args: { children: 'Content' } }

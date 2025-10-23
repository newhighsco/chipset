import { SiteContainer } from '..'

export default { component: SiteContainer }

export const Source = {
  args: { children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const Example = { args: Source.args }

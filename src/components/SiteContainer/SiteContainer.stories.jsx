import { SiteContainer } from '..'

export default { component: SiteContainer }

export const Source = { args: { children: 'Content' } }

export const Example = {
  args: Source.args,
  parameters: { chromatic: { disableSnapshot: false } }
}

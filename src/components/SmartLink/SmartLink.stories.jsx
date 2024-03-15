import { SmartLink } from '..'

export default {
  component: SmartLink,
  parameters: { chromatic: { disable: true } }
}

export const Source = {
  args: { href: 'https://Example.com/', children: 'Content' }
}

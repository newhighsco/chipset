import { Landmark } from '..'

export default {
  component: Landmark,
  parameters: { chromatic: { disable: true } }
}

export const Source = { args: { id: 'landmark', children: 'Content' } }

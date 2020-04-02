import { create } from '@storybook/theming/create'
import { config, homepage } from '../package.json'

const { title } = config

export default create({
  base: 'light',
  brandTitle: title,
  brandUrl: homepage,
  brandImage: '/logo.svg'
})

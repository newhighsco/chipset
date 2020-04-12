import { create } from '@storybook/theming/create'
import { config, homepage, name } from '../package.json'

const { logo, theme, title } = config

export default create({
  base: theme,
  brandTitle: title || name,
  brandUrl: homepage,
  brandImage: logo
})

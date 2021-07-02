import { create } from '@storybook/theming/create'
import packageInfo from '../package.json'

const { config, homepage, name } = packageInfo
const { logo, theme, title } = config

export default create({
  base: theme,
  brandTitle: title || name,
  brandUrl: homepage,
  brandImage: logo
})

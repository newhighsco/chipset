import { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

export default config

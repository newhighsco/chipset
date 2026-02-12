/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  framework: '@storybook/react-webpack5',
  stories: ['../src', { directory: '../styles', titlePrefix: 'Styles' }],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static'],
  webpackFinal: config => {
    config.resolve.alias['@newhighsco/chipset'] = process.cwd()

    return config
  }
}

export default config

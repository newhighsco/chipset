module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

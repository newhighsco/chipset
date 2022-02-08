module.exports = {
  core: {
    builder: 'webpack5'
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

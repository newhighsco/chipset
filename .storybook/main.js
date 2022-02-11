module.exports = {
  core: {
    builder: 'webpack5'
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src/**/*.stories.@(jsx|mdx)'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

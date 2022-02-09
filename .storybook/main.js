module.exports = {
  core: {
    builder: 'webpack5'
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

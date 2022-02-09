module.exports = {
  core: {
    builder: 'webpack5'
  },
  features: {
    storyStoreV7: true
  },
  stories: ['../src/docs/*.stories.mdx', '../src/components/**/*.stories.tsx'],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

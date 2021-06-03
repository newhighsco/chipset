module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['./README.stories.mdx', '../src/**/*.stories.@(js|mdx)'],
  addons: ['@newhighsco/storybook-preset']
}

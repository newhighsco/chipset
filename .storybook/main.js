module.exports = {
  framework: '@storybook/react-webpack5',
  stories: ['../src', { directory: '../styles', titlePrefix: 'Styles' }],
  addons: ['@newhighsco/storybook-preset'],
  staticDirs: ['./static']
}

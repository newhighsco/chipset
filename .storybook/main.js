module.exports = {
  stories: ['../src/index.stories.mdx', '../src/**/*.stories.(js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    const isProd = configType === 'PRODUCTION'

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: require.resolve('style-loader') },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: isProd
                ? '[hash:base64]'
                : '[folder]_[local]__[hash:base64:5]'
            }
          }
        },
        { loader: require.resolve('sass-loader') }
      ]
    })

    return config
  }
}

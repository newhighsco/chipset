module.exports = {
  stories: ['../src/components/**/stories.js'],
  addons: [],
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

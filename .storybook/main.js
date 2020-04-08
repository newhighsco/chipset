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

    const existingSvgRule = config.module.rules.findIndex(rule =>
      rule.test.toString().includes('svg')
    )
    config.module.rules[existingSvgRule].exclude = /\.svg$/

    config.module.rules.unshift({
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

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            svgoConfig: {
              plugins: [{ prefixIds: false }]
            }
          }
        }
      ]
    })

    return config
  }
}

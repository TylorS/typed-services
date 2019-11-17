// const BUILD_ENV = process.env.BUILD_ENV || 'development'
// const isProduction = BUILD_ENV === 'production'
const isBrowser = process.env.BROWSER === 'true'

module.exports = function(api) {
  api.cache(true)

  const plugins = ['@babel/plugin-proposal-class-properties']

  return {
    presets: [
      [
        '@babel/typescript',
        {
          allExtensions: true,
          isTSX: true,
          allowNamespaces: true,
        },
      ],
      [
        '@babel/env',
        {
          loose: true,
          targets: isBrowser
            ? {
                esmodules: false,
                browsers: ['last 2 versions'],
              }
            : {
                node: true,
              },
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins,
  }
}

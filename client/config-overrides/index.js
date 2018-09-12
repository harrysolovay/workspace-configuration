const { getBabelLoader } = require('react-app-rewired')
const {
  createLoaderMatcher,
  findRule,
  addBeforeRule,
  existsInRoot,
  whitelist,
} = require('./utilities')

module.exports = (config, env) => {

  const babelLoader = getBabelLoader(config.module.rules)
  babelLoader.options.babelrc = true

  const eslintLoaderMatcher = createLoaderMatcher('eslint-loader')

  const rule = findRule(
    config.module.rules,
    eslintLoaderMatcher,
  )

  delete rule.options.baseConfig
  rule.options.useEslintrc = true

  const stylelintRules = {
    loader: 'stylelint-custom-processor-loader',
    options: {
      configPath: null,
      emitWarning: true,
    },
  }

  addBeforeRule(
    config.module.rules,
    eslintLoaderMatcher,
    stylelintRules,
  )

  return config

}
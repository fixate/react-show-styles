const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.plugins.push(
    new SvgStore({
      svgoOptions: {
        plugins: [{removeTitle: true}],
      },
      prefix: '',
    }),
  );

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  });

  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions = config.resolve.extensions.concat(['.ts', '.tsx']);

  return config;
};

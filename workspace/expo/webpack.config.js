const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('node:path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias['@workspace/app'] = path.resolve(__dirname, '../../workspace/app/');

  config.module.rules.forEach((r) => {
    if (r.oneOf) {
      r.oneOf.forEach((o) => {
        console.log(JSON.stringify(o));
        if (o.use && o.use.loader && o.use.loader.includes('babel-loader')) {
          o.include = [
            path.resolve('./src'),
            path.resolve('./entry-point.js'),
            path.resolve('./assets'),
            path.resolve(__dirname, '../../workspace/app/'),
          ];
        }
      });
    }
  });

  return config;
};

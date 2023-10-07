// const CracoLessPlugin = require('craco-less');
const path = require('node:path');

const webpack = require('webpack');

module.exports = {
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },

  plugins: [
    // new webpack.DefinePlugin({
    //   // Inject the "__DEV__" global variable.
    // "__DEV__": JSON.stringify(process.env.NODE_ENV !== "production"),
    //   // Inject the "__SUBPLATFORM__" global variable.
    //   __SUBPLATFORM__: JSON.stringify("electron"),
    // }),
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.plugins.push(
            new webpack.DefinePlugin({
              __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
              __SUBPLATFORM__: JSON.stringify('electron'),
            })
          );

          // import workspace/app so it's compiled too
          const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
          if (oneOfRule) {
            const tsxRule = oneOfRule.oneOf.find((rule) => rule.test && rule.test.toString().includes('tsx'));

            const newIncludePaths = [
              // relative path to my workspace library
              path.resolve(__dirname, '../../workspace/app/'),
            ];
            if (tsxRule) {
              if (Array.isArray(tsxRule.include)) {
                tsxRule.include = [...tsxRule.include, ...newIncludePaths];
              } else {
                tsxRule.include = [tsxRule.include, ...newIncludePaths];
              }
            }
          }
          // console.log("webpackConfig",JSON.stringify(webpackConfig))
          return webpackConfig;
        },
      },
    },
  ],
};

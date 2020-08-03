const fileLoaderRule = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

module.exports = async ({ config }) => {
  /* Find the matching JavaScript module rule  */
  const jsRule = config.module.rules.find((rule) => '.js'.match(rule.test));

  if (jsRule) {
    const options = jsRule.use[0].options;
    /* Ensure the rule has presets */
    if (!options.hasOwnProperty('presets')) {
      options.presets = [];
    }

    /* Add Babel’s preset-react to the rule’s presets */
    options.presets.push('@babel/preset-react');
  }

  // remove svg from existing rule
  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      };
    }

    // use svgr for svg files
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: {
    //     loader: '@svgr/webpack',
    //     options: {
    //       icon: true,
    //       configFile: 'svgr.config.js',
    //     },
    //   },
    // });
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // });

    config.module.rules.push({
      test: /\*.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true,
          },
        },
      ],
    });

    return rule;
  });

  return config;
};

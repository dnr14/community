const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    configure: {
      resolve: {
        fallback: {
          util: require.resolve('util/'),
        },
      },
    },
  },
};

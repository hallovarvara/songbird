// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    ...config.resolve,
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/helpers/constants.ts'),
      '@data': path.resolve(__dirname, 'src/helpers/data/index.ts'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/helpers/services/'),
      '@types': path.resolve(__dirname, 'src/helpers/types.ts'),
      '@utils': path.resolve(__dirname, 'src/helpers/utils/'),
    },
  };

  return config;
};

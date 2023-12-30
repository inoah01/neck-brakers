module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      // Required for ts paths
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './components',
            '@constants': './constants',
            '@assets': './assets',
            '@services': './services',
            '@contexts': './contexts',
            '@types': './types',

          },
        },
      ],
    ],
  };
};

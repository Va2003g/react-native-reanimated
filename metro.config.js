// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

const {
    wrapWithReanimatedMetroConfig,
  } = require('react-native-reanimated/metro-config');
  
  const config = {
    ...defaultConfig,
  };
  
module.exports = wrapWithReanimatedMetroConfig(config);
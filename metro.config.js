const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// ✅ Fix for Firebase .cjs files
config.resolver.sourceExts.push('cjs');

// ✅ Optional stability fix (recommended by Expo team)
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
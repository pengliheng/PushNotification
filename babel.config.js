const path = require('path');

const alias = {
  "@modules": path.resolve(__dirname,"./modules"),
}

const resolver = {
  alias,
  "root": [path.resolve(__dirname,"..")],
  "extensions": [".js", ".ios.js", ".ts", ".tsx", ".android.js"],
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    '@babel/transform-flow-strip-types',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', {}],
    ['module-resolver', resolver],
  ],
};

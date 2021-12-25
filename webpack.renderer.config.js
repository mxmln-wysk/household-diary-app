const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
});

module.exports = {
  entry: {
    Renderer:'./src/app.tsx',
  },

  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.sass']
  },
  target: 'electron-renderer',
};

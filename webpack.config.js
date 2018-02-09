const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    filename: 'dist/public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react", "stage-2"],
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
    ]
  },
}
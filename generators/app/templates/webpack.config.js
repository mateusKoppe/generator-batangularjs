const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'bundle.css'
})

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'ng-annotate-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: ['css-loader']
        })
      },
      {
        test: value => {
          if(/src\/index\.html$/.test(value)) return false;
          if(/\.html$/.test(value)) return true;
          return false;
        },
        use: [
          { loader: 'ngtemplate-loader?relativeTo=' + __dirname + '/' },
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff?2|ttf|eot)$/,
        use: [ 'file-loader' ]
      },
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
  ]
};

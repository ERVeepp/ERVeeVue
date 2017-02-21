var path = require('path')
var webpack = require('webpack')
//var ExtractTextPlugin = require("extract-text-webpack-plugin")
//"extract-text-webpack-plugin": "^1.0.1",
//"webpack": "^2.1.0-beta.28",
//"webpack-dev-server": "^2.1.0-beta.9"
module.exports = {
    plugins: [
        //new ExtractTextPlugin("./src/css/styles.css")
    ],
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                // the "scss" and "sass" values for the lang attribute to the right configs here.
                // other preprocessors should work out of the box, no loader config like this nessessary.
                'scss': 'vue-style-loader!css-loader!autoprefixer-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!autoprefixer-loader!sass-loader?indentedSyntax'
              }
              // other vue-loader options go here
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
        },
        {
            test: /\.css$/,
            loader: ["style-loader","css-loader","autoprefixer-loader"]
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader","css-loader","autoprefixer-loader","sass-loader"]
        },
    	{
		    test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
		    loader: "file-loader"
		}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

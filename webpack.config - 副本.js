var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
    	{
    		test: /\.css$/,
    		loader: "style!css"
    	},
    	{
		    test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
		    loader: "file"
		},
        {
            test: /\.vue$/,
            loader: 'vue',
            options: {
                // vue-loader options go here
            }
        },
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },
        //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
    	{ test: /\.scss$/,
    		loader: 'style!css!sass?sourceMap'
    	},
        {
        test: /\.(png|jpg|gif|svg)$/,
            loader: 'file',
            options: {
              name: '[name].[ext]?[hash]'
            }
        }
    ]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
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
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

module.exports = {
    devtool: 'inline-source-map',
    entry: [path.join(__dirname, 'src/index.js'),'react-hot-loader/patch'],
    output: {
        path: path.join(__dirname,"./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
               test: /\.(less|css)$/,
                use:[ 'style-loader','css-loader','less-loader'],
            },
            {
              test: /\.sass$/,
              loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                  use: [
                    {
                          loader: "url-loader",
                          options: {
                            limit: 20000,
                            name: '[name].[ext]'
                          }
                      }
                    ]
                  // loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, 'src/index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx','.less'],
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
}
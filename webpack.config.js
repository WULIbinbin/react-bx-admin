var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//用于自动生成html入口文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//将CSS代码提取为独立文件的插件
//const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");//CSS模块资源优化插件
const packagejson = require("./package.json");

module.exports = {
	mode: 'development',
	entry: {
		main: ['./src/index.jsx'],
		vendor: [
			"antd",
			"react",
			"react-dom",
			"react-router",
			"react-router-dom",
		]
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			// {
			// 	test: /(\.tsx|\.ts)$/,
			// 	exclude: '/node_modules/',
			// 	use: 'awesome-typescript-loader'
			// },
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env', 'babel-preset-react', 'es2015', 'es2016', 'stage-0'],
					},
				}
			},
			{
				test: /\.less$/,
				exclude: '/node_modules/',
				use: [

					{
						loader: MiniCssExtractPlugin.loader,//建议生产环境采用此方式解耦CSS文件与js文件
					},

					{
						loader: 'css-loader',//CSS加载器
					},
					{
						loader: 'less-loader',//LESS加载器
					},
					{
						loader: 'postcss-loader',//承载autoprefixer功能
						options: {
							sourceMap: false,
							plugins: () => [
								require('autoprefixer')({
									overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
								})
							]
						},
					},
				]
			}
		]
	},
	devtool: process.env.NODE_ENV == 'production' ? 'source-map' : false,
	devServer: {
		inline: true,
		hot: true,
		historyApiFallback: true,
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react-bx-admin',
			filename: 'index.html',
			template: './index.html',
			showErrors: true,
			meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
		}),//生成入口html文件
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css"
		}),//为抽取出的独立的CSS文件设置配置参数
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		}),
	],
	optimization: {
		//对生成的CSS文件进行代码压缩 mode='production'时生效
		// minimizer: [
		// 	new OptimizeCssAssetsPlugin()
		// ]
		splitChunks: {
			// 抽离入口文件公共模块为commmons模块
			cacheGroups: {
				vendor: {
					name: "vendor",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
	resolve: {
		extensions: [' ', '.ts', '.tsx', '.jsx', '.js', '.json', '.less', '.css'],
		alias: {}
	}
};
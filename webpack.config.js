var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//用于自动生成html入口文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//将CSS代码提取为独立文件的插件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");//CSS模块资源优化插件

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
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
				test: /\.scss$/,
				exclude: '/node_modules/',
				use: [

					{
						loader: MiniCssExtractPlugin.loader,//建议生产环境采用此方式解耦CSS文件与js文件
					},

					{
						loader: 'css-loader',//CSS加载器
					},
					{
						loader: 'sass-loader',//SCSS加载器，webpack默认使用node-sass进行编译
					},
					{
						loader: 'postcss-loader',//承载autoprefixer功能
						options: {
							sourceMap: true,
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
	devtool: 'eval-source-map',
	devServer: {
		inline: true,
		hot: true,
		historyApiFallback: true,
		contentBase: './public'
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
			filename: "[name].css"
		})//为抽取出的独立的CSS文件设置配置参数
	],
	optimization: {
		//对生成的CSS文件进行代码压缩 mode='production'时生效
		minimizer: [
			new OptimizeCssAssetsPlugin()
		]
	},
	resolve: {
		extensions: [' ', '.jsx', '.js', '.json', '.scss', '.css'],
		alias: {}
	}
};
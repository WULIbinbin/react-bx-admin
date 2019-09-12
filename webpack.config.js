var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//用于自动生成html入口文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//将CSS代码提取为独立文件的插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const webpackConfig = {
	mode: 'development',
	entry: {
		main: ['./src/index.jsx'],
		vendor: [
			"react",
			"react-dom",
			"antd",
			"react-router",
			"react-router-dom",
		],
		// plugins: [

		// ]
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
	devtool: false,
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
			chunks: "async",
			minSize: 30000, // 模块的最小体积
			minChunks: 1, // 模块的最小被引用次数
			maxAsyncRequests: 5, // 按需加载的最大并行请求数
			maxInitialRequests: 3, // 一个入口最大并行请求数
			automaticNameDelimiter: '~', // 文件名的连接符
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: 1
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	resolve: {
		extensions: [' ', '.ts', '.tsx', '.jsx', '.js', '.json', '.less', '.css'],
		alias: {}
	}
};

if (process.env.npm_config_report) {
	webpackConfig.plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		analyzerHost: '127.0.0.1',
		analyzerPort: 8889,
		reportFilename: 'report.html',
		defaultSizes: 'parsed',
		openAnalyzer: true,
		generateStatsFile: false,
		statsFilename: 'stats.json',
		statsOptions: null,
		logLevel: 'info'
	}))
}

module.exports = webpackConfig;
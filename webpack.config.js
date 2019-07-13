var path = require('path');
var webpack = require('webpack');

module.exports = {
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
						presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-es2015'],
					},
				}
			},
			{
				test: /(\.css|\.scss)$/,
				exclude: '/node_modules/',
				use: ['style-loader', 'css-loader']
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
		//new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: [' ', '.jsx', '.js', '.json', '.scss', '.css'],
		alias: {}
	}
};
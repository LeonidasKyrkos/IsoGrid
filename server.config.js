module.exports = {
	contentBase: './app/', // boolean | string | array, static file location
	publicPath: '/build/',
	compress: true, // enable gzip compression
	historyApiFallback: true, // true for index.html upon 404, object for multiple paths
	hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
	https: false, // true for self-signed, object for cert authority
	noInfo: true, // only errors & warns on hot reload
}
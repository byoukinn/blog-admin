module.exports = {
	publicPath: '/',
	devServer: {
		overlay: {
			warnings: false,
			errors: true,
		},
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://110.64.211.146:8222/',
				ws: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
}

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
                target: 'http://localhost:8222/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            },
        }
    }
}
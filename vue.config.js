module.exports = {
    publicPath: '.',
    devServer: {
        overlay: {
            warnings: false,
            errors: true,
        },
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://blog-admin.zhangbk.cn/api/public/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            },
        }
    }
}
module.exports = {
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8067,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        /* 使用代理 */
        proxy: {
            '/api': {
                target: 'https://vote-ng.jammyfm.com/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                  /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                    实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                   */
                  '^/api': '' 
                }
              },
        },
    },
}
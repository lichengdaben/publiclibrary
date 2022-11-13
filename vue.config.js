module.exports = {
  devServer: {
    proxy: {
    //  '^/api': {
    //    target: 'http://localhost:3000',
    //    changeOrigin: true,
    //  },
    "/api": {
        target: "http://localhost:3000", //node.js服务器运行的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/" //路径重写
        }
    }
  },
//publicPath:'/app/'
}
}



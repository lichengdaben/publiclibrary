module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://keycloak.interlib.com.cn',
        changeOrigin: true
      },
    }
  },
publicPath:'/app/'
}




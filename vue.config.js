import { defineConfig } from '@vue/cli-service'
export default defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '^/api': {
        target: 'http://183.6.57.236:30000',
        changeOrigin: true
      },
    }
  }
})




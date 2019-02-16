const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-demo' : '/'

module.exports = {
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 跨域
  devServer: {
    proxy: 'http://localhost:3000'
  }
}

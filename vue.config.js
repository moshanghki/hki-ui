/**
 * Created by haopeng on 2019/10/11
 */
const path = require('path')
module.exports = {
  // 修改pages入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模版
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展webpack
  chainWebpack: config => {
    // @默认指向src，这里修改为examples
    // ～指向packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
    // 把examples和packages加入编译，因为新增的文件默认不被webpack处理
    config.module
      .rule('js')
      .include.add(/examples/).end()
      .include.add(/packages/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改其他选项
        return options
      })
  }
}

/**
 * Created by haopeng on 2019/10/11
 * desc: 暴露组件，针对所有组件全局安装
 */
import HkiTest from './test/index'

const components = [
  HkiTest
]

// 定义install方法，接受Vue作为参数
const install = Vue => {
  console.log('定义install方法，接受Vue作为参数')
  // 判断是否安装，如果安装不继续执行
  if (install.installed) {
    return
  }
  install.installed = true
  // 遍历注册所有组件
  components.map(component => {
    Vue.use(component)
    // 下面这种写法也可以，同时component不需要提供install方法
    // Vue.component(component.name, component)
  })
}

// 检测到Vue才执行，因为是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  console.log('xxxxx')
  install(window.Vue)
}

export default {
  install,
  ...components
}

/**
 * Created by haopeng on 2019/10/11
 */
// 为组件提供install方法，供组件对外按需引入
import HkiTest from './src/Index'
HkiTest.install = Vue => {
  Vue.component(HkiTest.name, HkiTest)
}
export default HkiTest

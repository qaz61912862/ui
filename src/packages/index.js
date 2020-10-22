import Button from './button.vue'
import Icon from './icon.vue'
import Input from './input.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'

const components = [
  Button,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup
]
const install = Vue => {
  // Vue.component(Button.name,Button)
  // Vue.component(Icon.name,Icon)
  // Vue.component(Radio.name,Radio)
  // Vue.component(RadioGroup.name,RadioGroup)
  // Vue.component(Checkbox.name,Checkbox)
  // Vue.component(CheckboxGroup.name,CheckboxGroup)
  components.forEach(each => {
    console.log(each.name, each)
    Vue.component(each.name, each) 
  })
  // 我们可以把名字在组件文件里用name定义好,这样就取的是组件文件的名字
}

if(typeof window.Vue !== 'undefined'){ // 这个判断条件这样写是因为Vue只有用script标签的方式导入才会挂载到window上，import的方式导入是挂载不到window上的，而是在当前的模块内
  // 当前全局window下有Vue实例的话，直接调用install把Vue传进去
  install(window.Vue) // 全局直接通过script引用的方式会默认调用install方法
}
export default {
  install 
}

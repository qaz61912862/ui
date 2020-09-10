import {
  reactive,
  // vShow,
  // vModelText,
  // withDirectives,
  // App,
  // isReadonly,
  toRefs
} from 'vue'

const install = (app) => {
  app.component('MyInput', {
    props: {
      number: {
        type: [Number, String],
        default: 0
      }
    },
    setup(props, { slots }) {
      const state = reactive({ input: 0, isShow: false })
      return {
        ...toRefs(state),
        ...toRefs(slots)
      }
    },
    data () {
      return {
        number2: 0
      }
    },
    render(props) {
      return (
        <div>
          <div v-show={false}>你看不见</div>
          {props.desc()}
          {props.$slots.desc()[0]}
          {this.number2}
        </div>
      )
    }
  })
}

export default{
  install
}
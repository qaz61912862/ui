<template>
  <div :v-highlight="state.color">{{props.age}}{{state.color}}</div>
  age: {{hoppy}}
</template>

<script>
import { reactive, inject, ref } from 'vue'
export default {
  name: 'Age',
  props: {
    age: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    props = reactive(props)
    let hoppy = ref(inject('hoppy'))
    const state = reactive({
      color: 'red'
    })
    return {
      props,
      state,
      hoppy
    }
  }
}
</script>

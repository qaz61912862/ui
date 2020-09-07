<template>
  <div class="hello">
    {{state.count}}
    <h-button @h-click="test" />
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      count: 0
    })
    const test = () => {
      // alert(1)
      // console.log(val)
      state.count += 1
    }
    return {
      state,
      test
    }
  }
}
</script>

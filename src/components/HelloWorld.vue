<template>
  <div class="hello">
    zzz:{{zzz}}
    {{nm}}
    {{ff}}
    {{state.count}}
    <h-button @h-click="test" />
  </div>
</template>

<script>
import {
   computed,
   reactive,
   onMounted,
   onBeforeMount,
   nextTick,
   watchEffect,
   ref,
   toRefs,
   watch
} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const ff = ref(123)
    
    onMounted(() => {
      console.log('mounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    nextTick(() => {
      console.log('nextTick')
    })
    console.log('common')
    const state = reactive({
      count: 0
    })
    const state2 = reactive({
      nm: 'nma'
    })
    const zzz = computed(() => {
      return state2.nm + '1'
    })
    const test = () => {
      // alert(1)
      // console.log(val)
      state.count += 1
      state2.nm += 1
    }
    watch([() => state.count, () => state2.nm], newVal => {
      console.log('change', newVal)
    })
    watchEffect(() => {
      console.log('count=' + state.count)
    })
    return {
      state,
      test,
      ff,
      zzz,
      ...toRefs(state2)
    }
  }
}
</script>

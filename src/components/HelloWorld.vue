<template>
  <div class="hello">
    zzz:{{zzz}}
    {{nm}}
    {{ff}}
    {{state.count}}
    <p ref="pRef">p-text</p>
    <h-button @h-click="test" />
    <hr />
    <div class="test-components">
      <age :age="33"/>
      <hello name="Hanson" @updateName="updateName">
        <template v-slot:desc>
          <div>
            这是输入框
          </div>
        </template>
      </hello>
      <!-- <my-input> 
        <template v-slot:desc>
          <div>
            这是输入框
          </div>
        </template>
      </my-input> -->
    </div>
  </div>
</template>

<script>
import Age from './testComponents/Age'
import Hello from './testComponents/Hello.js'
import {
   computed,
   inject,
   provide,
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
  components: {
    Age,
    Hello
  },
  props: {
    msg: String
  },
  setup() {
    const ff = ref(123)
    let pRef = ref(null)
    provide('hoppy',ref('javascript'))
    // provide('hoppy',ref('javascript222'))
    let hoppy = ref(inject('hoppy'))
    onMounted(() => {
      pRef.value.style.color = 'red'
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
      // provide('hoppy',ref('javascript222'))
      state2.nm += 1
    }
    watch([() => state.count, () => state2.nm], newVal => {
      console.log('change', newVal)
    })
    watchEffect(() => {
      console.log('count=' + state.count)
    })
    const updateName = () => {
      console.log('update')
    }
    return {
      pRef,
      state,
      test,
      ff,
      zzz,
      ...toRefs(state2),
      updateName,
      hoppy
    }
  }
}
</script>

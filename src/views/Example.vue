<template>
  <div class="example">
    <!-- count: {{count}} -->
    testValue: {{testValue}}
    count: {{count}}
    name: {{name}}
    countName: {{countName}}
    <h-button type="success" size="medium" @h-click="test" round>我是按钮</h-button>
    <div style="margin-top: 10px">
      <h-radio @change="getVal" label="1" v-model="testValue" name="备选项1" />
      <h-radio @change="getVal" label="2" v-model="testValue" name="备选项2" />
      <div>
        value: {{testValue}}
      </div> 
    </div>
    <div style="margin-top: 10px">
      <h-checkbox @change="getVal" label="1" v-model="testCheckbox" name="备选项1" />
      <!-- <h-checkbox @change="getVal" label="2" v-model="testCheckbox" name="备选项2" /> -->
      <div>
        value: {{testCheckbox}}
      </div>
    </div>
    <div style="margin-top: 10px">
      <h-checkbox-group v-model="testGroup">
        <h-checkbox label="1" name="备选项1"></h-checkbox>
        <h-checkbox label="2" name="备选项2"></h-checkbox>
        <h-checkbox label="3" name="备选项3"></h-checkbox>
        <h-checkbox label="4" name="备选项4"></h-checkbox>
      </h-checkbox-group>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, watch, computed } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
export default {
  setup() {
    const count = ref(0)
    const testGroup = ref(['1', '2'])
    const countName = ref(100)
    const route = useRoute()
    const router = useRouter()
    // console.log(router)
    // watch(() => route, (newValue) => {
    //   // 回调函数
    //   console.log(newValue + 'route changed')
    // }, {
    //   immediate: true,
    //   deep: true
    // })
    // 
    onBeforeRouteUpdate(() => {
      console.log('onBeforeRouteUpdate')
    })
    // 路由改变时触发 如从/example跳转到/, 同路由参数改变不触发
    onBeforeRouteLeave(() => {
      alert(1)
    })
    const name = computed({
      get() {
        return testValue.value + count.value
      },
      set() {
        // val是name的最新值
        // console.log(val)
        // console.log(route)
        countName.value += 1
      }
    })
    const testValue = ref('1')
    const testCheckbox = ref(true)
    const test = () => {
      console.log(route)
      router.push('/example?name=123')
      name.value += 1
    }
    const getVal = () => {
      // console.log(val)
    }
    const unwatch = watch(count, (newValue, oldValue) => {
      console.log('n&o', newValue, oldValue)
    })
    var timer = setInterval(() => {
      count.value += 1
      if (count.value >= 5) {
        clearInterval(timer)
      }
      if (count.value >= 3) {
        unwatchEffect()
        unwatch()
      }
    }, 2000)
    const unwatchEffect = watchEffect(() => {
      // console.log(count.value)
    })
    return {
      testGroup,
      testCheckbox,
      countName,
      name,
      test,
      testValue,
      getVal,
      count
    }
  }
}
</script>
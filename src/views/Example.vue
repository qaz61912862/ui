<template>
  <div class="example">
    <h-button type="success" size="medium" @h-click="test" round>我是按钮</h-button>
    <div style="margin-top: 10px">
      <h-radio @change="getVal" label="1" v-model="testValue" name="备选项1" />
      <h-radio @change="getVal" label="2" v-model="testValue" name="备选项2" />
      <div>
        value: {{testValue}}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const testValue = ref('1')
    const test = () => {
      alert(123)
    }
    const getVal = (val) => {
      console.log(val)
    }
    return {
      test,
      testValue,
      getVal
    }
  }
}
</script>
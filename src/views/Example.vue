<template>
  <div class="example">
    <!-- count: {{count}} -->
    testValue: {{testValue}}
    count: {{count}}
    name: {{name}}
    countName: {{countName}}
    <h-button type="success" size="medium" @click="test" round>我是按钮</h-button>
    <div style="margin-top: 10px">
      <h-radio @change="getVal" label="1" v-model="testValue" name="备选项1" />
      <h-radio @change="getVal" label="2" v-model="testValue" name="备选项2" />
      <div>
        value: {{testValue}}
      </div> 
    </div>
    <div style="margin-top: 10px">
      <h-radio-group
        v-model="radio"
      >
        <h-radio :label="3">备选项3</h-radio>
        <h-radio :label="6">备选项6</h-radio>
        <h-radio :label="9">备选项9</h-radio>
      </h-radio-group>
      <div>
        value: {{radio}}
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
      {{testGroup}}
      <h-checkbox-group 
        v-model="testGroup" 
        @change="getGroupVal"
        :min="1"
      >
        <h-checkbox label="1" name="备选项1"></h-checkbox>
        <h-checkbox label="2" name="备选项2"></h-checkbox>
        <h-checkbox label="3" name="备选项3"></h-checkbox>
        <h-checkbox label="4" name="备选项4"></h-checkbox>
      </h-checkbox-group>
    </div>
    <!-- <h-input v-model="testInput" placeholder="请输入"/> -->
    <!-- {{testInput}} -->
    <br /><br />
    <h-form :rules="rules" @form-submit="formSubmit">
      <h-input prop="mobile" v-model="params.mobile" placeholder="请输入手机号"/>
      <h-input prop="email" v-model="params.email" placeholder="请输入邮箱"/>
      性别:
      <h-radio-group
        v-model="params.sex"
        prop="sex"
      >
        <h-radio :label="1">男</h-radio>
        <h-radio :label="2">女</h-radio>
      </h-radio-group>
    </h-form>
  </div>
</template>

<script>
import { ref, watchEffect, computed, reactive } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
export default {
  setup() {
    const rules = ref({
      mobile: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入手机号'
        },
        {
          validate: /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/,
          trigger: 'blur',
          message: '请输入正确的手机号'
        }
      ],
      email: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入邮箱'
        },
        {
          validate: /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/,
          trigger: 'blur',
          message: '请输入正确的邮箱'
        }
      ],
      sex: [
        {
          required: true,
          trigger: 'change',
          message: '请选择性别'
        },
      ]
    })
    const testInput = ref('123')
    const radio = ref(9)
    const count = ref(0)
    const testGroup = ref(['1', '3'])
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
    const getGroupVal = val => {
      console.log('getGroupVal', val)
    }
    const test = () => {
      console.log(route)
      router.push('/example?name=123')
      name.value += 1
    }
    const getVal = (val) => {
      console.log('theVal', val)
    }
    // const unwatch = watch(count, (newValue, oldValue) => {
    //   console.log('n&o', newValue, oldValue)
    // })
    var timer = setInterval(() => {
      count.value += 1
      if (count.value >= 5) {
        clearInterval(timer)
      }
      if (count.value >= 3) {
        unwatchEffect()
        // unwatch()
      }
    }, 2000)
    const unwatchEffect = watchEffect(() => {
      // console.log(count.value)
    })
    const params = reactive({
      mobile: '',
      email: '',
      sex: ''
    })
    const formSubmit = (valid) => {
      if (valid) {
        console.log(params)
      }
    }
    return {
      getGroupVal,
      testGroup,
      testCheckbox,
      countName,
      name,
      test,
      testValue,
      getVal,
      count,
      radio,
      testInput,
      params,
      rules,
      formSubmit
    }
  }
}
</script>
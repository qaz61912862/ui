<template>
  <div style="margin: 10px 0">
    <input 
      class="el-input input"
      :class="{'error': error}"
      :value="model"
      v-bind="$attrs"
      @input="emitInput"
      @blur="handleValidate"
    />
    <div class="error-msg" v-if="error">{{error}}</div>
  </div>
</template>

<script>
import { computed, inject, ref, onMounted } from 'vue'
import { emitter } from './form'
export default {
  name: 'h-input', // 定义组件名1
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  setup(props, { emit }) {
    const isForm = ref(!!inject('form'))
    const error = ref('')
    const rules = ref([])
    if (isForm.value) {
      rules.value = inject('rules')[props.prop]
    }
    const handleValidate = () => {
      const val = props.modelValue
      let allPassed = true
      allPassed = rules.value.every(({required = false, validate = '', message}) => {
        if (required) {
          if (val.trim() === '') {
            error.value = message
            return false
          }
          error.value = ''
          return true
        }
        
        if (validate) {
          if (!validate.test(val)) {
            error.value = message
            return false
          } else {
            error.value = ''
            return true
          }
        }
      })
      return allPassed
    }
    // console.log(inject('form'))
    const model = computed(() => {
      return props.modelValue
    })
    const emitInput= (e) => {
      // error.value = ''
      emit('update:modelValue', e.target.value)
    }
    onMounted(() => {
      emitter.emit('form-item-created', handleValidate)
    })
    return {
      isForm,
      model,
      emitInput,
      handleValidate,
      error
    }
  }
}
</script>
<style>
  .el-input{
    height: 30px;
    font-size: 16px;
    text-indent: 6px;
  }
  .error{
    border: 1px solid red;
  }
  .error-msg{
    color: red;
    font-size: 14px;
  }
</style>
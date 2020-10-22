<template>
  <input 
    class="el-input input"
    :value="model"
    v-bind="$attrs"
    @input="emitInput"
  />
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'h-input', // 定义组件名1
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  setup(props, { emit }) {
    const model = computed(() => {
      return props.modelValue
    })
    const emitInput= (e) => {
      emit('update:modelValue', e.target.value)
    }
    return {
      model,
      emitInput
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
</style>
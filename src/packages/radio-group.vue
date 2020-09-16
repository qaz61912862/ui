<template>
  <div @change="getVal">
    <slot></slot>
  </div>
</template>

<script>
import { computed, provide } from 'vue'
export default {
  name: 'h-radio-group',
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ''
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const getVal = (e) => {
      console.log(e.target.defaultValue)
      model.value = e.target.defaultValue
      emit('change', model.value)
    }
    const model = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit('update:modelValue', val)
      }
    })
    provide('RadioGroup', {
      name: 'RadioGroup',
      model
    })
    return {
      getVal
    }
  }
}
</script>
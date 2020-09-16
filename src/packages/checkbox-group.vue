<template>
  <div @change="getVal">
    <slot></slot>
  </div>
</template>
<script>
import { computed, provide, nextTick } from 'vue'
export default {
  name: 'h-checkbox-group',
  props: {
    modelValue: {
      type: Array,
      default: () => ([])
    },
    min: {
      type: Number,
      default: undefined
    },
    max: {
      type: Number,
      default: undefined
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const model = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      }
    })
    const changeEvent = value => {
      emit('update:modelValue', value)
      nextTick(() => {
        // emit('change', value)
      })
    }
    const getVal = ({target: {checked, defaultValue}}) => {
      if (checked) {
        model.value.push(defaultValue)
      } else {
        const index = model.value.findIndex(item => item === defaultValue)
        model.value.splice(index, 1)
      }
      emit('change', Array.from(model.value))
    }
    provide('CheckboxGroup', {
      name: 'CheckboxGroup',
      model,
      // changeEvent,
      min: props.min,
      max: props.max
    })
    return {
      getVal
    }
  }
}
</script>
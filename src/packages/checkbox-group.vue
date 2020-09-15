<template>
  <div>
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
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const model = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      }
    })
    const changeEvent = value => {
      ctx.emit('update:modelValue', value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }
    provide('CheckboxGroup', {
      name: 'CheckboxGroup',
      model,
      changeEvent
    })
  }
}
</script>
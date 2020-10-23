<template>
  <div>
    <slot name="default"></slot>
    <div style="margin-top: 10px" @click.prevent="submitForm">
      <slot name="submit">
        <h-button type="primary">submit</h-button>
      </slot>
    </div>
  </div>
</template>

<script>
import mitt from 'mitt'
import { provide, onUnmounted } from 'vue'
export const emitter = mitt()
export default {
  name: 'h-form',
  props: {
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    let funcArr = []
    const callback = (func) => {
      funcArr.push(func)
    }
    provide('form', true)
    provide('rules', props.rules)
    emitter.on('form-item-created', e => callback(e))
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(c => c)
      emit('form-submit', result)
    }
    onUnmounted(() => {
      emitter.off('form-item-created', e => callback(e))
      funcArr = []
    })
    return {
      submitForm
    }
  }
}
</script>
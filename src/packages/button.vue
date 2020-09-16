<template>
  <button :disabled="props.disabled" :class="`el-button el-button--${props.size} el-button--${props.type} ${round ? 'is-round': null} ${disabled ? 'is-disabled': null} `" @click="handleClick">button</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'h-button', // 定义组件名
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    props = reactive(props)
    const handleClick = () => {
      ctx.emit('click')
    }
    return {
      handleClick,
      props
    }
  }
}
</script>
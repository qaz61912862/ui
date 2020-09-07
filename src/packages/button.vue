<template>
  <button @click="handleClick">button</button>
</template>

<script>
export default {
  name: 'h-button', // 定义组件名
  setup(props, { emit }) {
    const handleClick = () => {
      emit('h-click', 123)
    }
    return {
      handleClick
    }
  }
}
</script>
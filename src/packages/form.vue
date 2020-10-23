<template>
  <div>
    <slot name="default"></slot>
    <div style="margin-top: 10px">
      <slot name="submit">
        <h-button type="primary">submit</h-button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'h-form' // 定义组件名1
}
</script>
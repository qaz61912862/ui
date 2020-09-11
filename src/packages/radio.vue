<template>
  <label 
    class="el-radio"
    :class="{
      'is-disabled': isDisabled,
    }"
    role="radio"
  >
    <input 
      v-model="model" 
      class="el-radio__input" 
      type="radio" 
      :value="label"
      :disabled="isDisabled"
      @change="handleChange"
    >
    <span class="el-radio__label">
      <slot>
      {{ name }}
      </slot>
    </span>
  </label>
</template>

<script>
import { computed, nextTick } from 'vue'
export default {
  name: 'h-radio',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: '',
    },
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  // emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const handleChange = (val) => {
      nextTick(() => {
        ctx.emit('change', val)
      })
    }
    const model = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        ctx.emit('update:modelValue', val)
      }
    })
    const isDisabled = computed(() => {
      return props.disabled
    })
    return {
      model,
      handleChange,
      isDisabled
    }
    // console.log(props.modelValue)
  },
}
</script>
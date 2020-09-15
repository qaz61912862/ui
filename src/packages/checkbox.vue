<template>
  <label
    class="el-checkbox"
    :class="{
      'is-disabled': isDisabled,
    }"
    role="checkbox"
  >
    <input 
      v-model="model"
      class="el-checkbox__input"
      type="checkbox"
      :value="label"
      :disabled="isDisabled"
      @change="handleChange"
    />
    <span class="el-checkbox__label">
      <slot>
      {{ name }}
      </slot>
    </span>
  </label>
</template>

<script>
import { computed, nextTick, inject } from 'vue'
export default {
  name: 'h-checkbox',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
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
    const _checkboxGroup = inject('CheckboxGroup', {})
    const store = computed(() => _checkboxGroup ? _checkboxGroup.modelValue.value : props.modelValue)
    console.log('store', store)
    const isGroup = computed(() => {
      return _checkboxGroup && _checkboxGroup.name === 'CheckboxGroup'
    })
    const model = computed({
      get() {
        return isGroup.value ? _checkboxGroup.model : props.modelValue
      },
      set(val) {
        ctx.emit('update:modelValue', val)
      }
    })

    console.log(_checkboxGroup)
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
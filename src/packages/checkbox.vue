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
import { computed, nextTick, inject, ref } from 'vue'
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
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const _checkboxGroup = ref(inject('CheckboxGroup', {}))
    // const max = _checkboxGroup.value.max
    // const min = _checkboxGroup.value.min
    const handleChange = (e) => {
      const target = e.target
      const val = target.checked
      nextTick(() => {
        emit('change', val)
        console.log(123)
      })
      
    }
    
    
    // const store = computed(() => _checkboxGroup ? _checkboxGroup.modelValue.value : props.modelValue)
    const isGroup = computed(() => {
      return _checkboxGroup.value && _checkboxGroup.value.name === 'CheckboxGroup'
    })
    const model = computed({
      get() {
        return isGroup.value ? _checkboxGroup.value.model : props.modelValue
      },
      set(val) {
        // console.log('go')
        emit('update:modelValue', val)
      }
    })
    // console.log(model)
    const isDisabled = computed(() => {
      return props.disabled
    })
    
    return {
      model,
      handleChange,
      isDisabled
    }
  },
}
</script>
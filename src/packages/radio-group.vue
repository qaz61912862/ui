<template>
  <span>
    <span @change="getVal">
      <slot></slot>
    </span>
    <div class="error-msg" v-if="error">{{error}}</div>
  </span>
</template>

<script>
import { computed, provide, inject, ref, onMounted } from 'vue'
import { emitter } from './form'
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
    const isForm = ref(!!inject('form'))
    // console.log(isForm)
    const error = ref('')
    const rules = ref([])
    // if (isForm.value) {
    //   rules.value = inject('rules')[props.prop]
    // }
    const getVal = (e) => {
      console.log(e.target.defaultValue)
      model.value = e.target.defaultValue
      emit('change', model.value)
    }
    const handleValidate = () => {
      let allPassed = true
      allPassed = rules.value.every(({required = false, message}) => {
        if (required) {
          if (model.value.trim() === '') {
            error.value = message
            return false
          }
          error.value = ''
          return true
        }
        return true
      })
      return allPassed
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
    onMounted(() => {
      emitter.emit('form-item-created', handleValidate)
    })
    return {
      getVal,
      isForm,
      rules,
      error
    }
  }
}
</script>
<style>
.error-msg{
  color: red;
  font-size: 14px;
}
</style>
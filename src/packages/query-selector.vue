<template>
  <el-select
    v-bind="$attrs"
    :modelValue="modelValue"
    :remote-method="remoteMethod"
    :loading="loading"
    @change="change"
    v-if="!readonly"
  >
    <el-option
      v-for="(item, idx) in options"
      :key="idx"
      :value="item[config.valueKey]"
      :label="item[config.labelKey]"
    />
  </el-select>
  <span v-else>{{content}}</span>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
function debounce(fn, delay = 1000) {
  var timer
  return function() {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}
export default defineComponent({
  name: 'query-selector',
  emits: ['update:modelValue', 'change'],
  props: {
    // 额外参数
    queryParams: {
      type: Object,
      default: () => ({})
    },
    // 是否初始化查询数据
    needInitSearch: {
      type: Boolean,
      default: false,
    },
    // 请求api
    method: {
      type: Function,
      default: () => {}
    },
    // key值解释
    config: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const options = ref([]);
    const getData = async (query) => {
      loading.value = true;
      const res = await props.method(query);
      loading.value = false;
      options.value = res[props.config.dataKey]
    }
    if (props.needInitSearch) getData();
    const remoteMethod = async (query) => {
      debounce(getData(query))
    }
    const change = (val) => {
      console.log(options.value);
      const item = options.value.find(it => val === it[props.config.valueKey])
      emit('update:modelValue', val)
      emit('change', val, item)
    }
    const content = computed(() => {
      return (options.value.find(item => item[props.config.valueKey] === props.modelValue) || {})[props?.config?.labelKey]
    })
    return {
      change,
      remoteMethod,
      loading,
      options,
      content,
    }
  }
})
</script>
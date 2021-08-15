<template>
  <div class="about">
    {{id}}
    <query-selector
      placeholder="请选择"
      @change="change"
      v-model="id"
      :method="getList"
      needInitSearch
      :config="{
        dataKey: 'data.users',
        labelKey: 'userName',
        valueKey: 'userId'
      }"
      filterable
      remote
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { getList } from '../http';

export default defineComponent({
  setup() {
    const id = ref('239');
    const change = (val, row) => {
      console.log(val, row)
    }
    return {
      id,
      getList,
      change,
    }
  },
});
</script>
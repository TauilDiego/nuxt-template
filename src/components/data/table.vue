<template>
  <table>
    
    <tr>
      <th v-for="(header, index) in computedHeaders" :key="index">{{ header }}</th>
    </tr>
    <tr v-for="(item, itemIndex) in items" :key="itemIndex">
      <td v-for="(itemProp, itemPropIndex) in computedHeaders" :key="itemPropIndex">{{ item[itemProp] }}</td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
const props = defineProps<{
  headers?: string[]
  items: {[key: string]: any}[]
}>()

const computedHeaders = computed(() => {
  const objectHeaders = Object.keys(props.items[0])

  return objectHeaders.length ? objectHeaders : props.headers

})

</script>

<style>
table, th, td {
  border:1px solid black;
}
</style>
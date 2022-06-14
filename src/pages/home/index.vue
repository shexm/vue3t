/** * @project vue3t * @dirname home * @author shexm */
<template>
  <div>
    <child :name="name" @logName="log"></child>
    <div>{{ info.sex }}</div>
    <div>{{ info.msg }}</div>
  </div>
</template>
<script setup lang="ts">
import { type Ref } from 'vue'
export type Info = {
  name: Ref<string>
  sex: 'male' | 'female'
  msg: string
}
const name = ref<string>('shexm')
const info = reactive<Info>({
  name,
  sex: 'male',
  msg: 'I am male'
})
const log = (value: string) => {
  console.log(value)
  info.sex = 'female'
  name.value = value
}
watchEffect(() => {
  console.log(name.value)
})
watch(name, (newValues, prevValues) => {
  console.log(newValues, prevValues)
  info.msg = 'I am female'
})
</script>

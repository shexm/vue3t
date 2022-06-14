<template>
  <div @click="change">I am {{ name }}</div>
</template>
<script lang="ts" setup>
defineProps<{ name: string }>()
const emit = defineEmits<{
  (event: 'logName', name: string): void
}>()
const change = () => {
  emit('logName', 'sxm')
}
</script>

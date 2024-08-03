<template>
  <i class="inline" :class="'bi bi-' + props.name"></i>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'app'
  }
})
</script>

<style lang="scss" scoped></style>

<template>
  <p v-html="props.text" class="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-2"></p>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: null }
})
</script>

<style lang="scss" scoped></style>

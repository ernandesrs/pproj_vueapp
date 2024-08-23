<template>
  <component
    :is="props.tag"
    class="text-xl font-semibold md:text-2xl text-zinc-700 dark:text-zinc-50 mt-5 mb-2"
  >
    {{ props.text }}
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h2'
  },
  text: {
    type: String,
    default: 'Heading 2 Text'
  }
})
</script>

<style lang="css" scoped></style>

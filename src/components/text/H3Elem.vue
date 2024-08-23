<template>
  <component
    :is="props.tag"
    class="text-lg font-semibold md:text-xl text-zinc-700 dark:text-zinc-50 mt-5 mb-2"
  >
    {{ props.text }}
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h3'
  },
  text: {
    type: String,
    default: 'Heading 3 Text'
  }
})
</script>

<style lang="css" scoped></style>

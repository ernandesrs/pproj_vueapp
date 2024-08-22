<template>
  <component
    :is="props.tag"
    class="text-2xl font-semibold md:text-3xl text-zinc-700 dark:text-zinc-50 my-4"
  >
    {{ props.text }}
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h1'
  },
  text: {
    type: String,
    default: 'Heading 1 Text'
  }
})
</script>

<style lang="css" scoped></style>

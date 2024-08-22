<template>
  <component
    :is="props.tag"
    class="text-xl font-semibold md:text-2xl text-zinc-500 dark:text-zinc-400 my-4"
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

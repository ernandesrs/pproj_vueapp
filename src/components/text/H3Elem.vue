<template>
  <component
    :is="props.tag"
    class="text-lg font-semibold md:text-xl text-zinc-400 dark:text-zinc-500 my-4"
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

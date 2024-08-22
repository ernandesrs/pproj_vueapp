<template>
  <component
    :is="props.tag"
    class="text-base font-semibold md:text-lg text-zinc-300 dark:text-zinc-600 my-4"
  >
    {{ props.text }}
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h4'
  },
  text: {
    type: String,
    default: 'Heading 4 Text'
  }
})
</script>

<style lang="css" scoped></style>

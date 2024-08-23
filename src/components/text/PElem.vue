<template>
  <p
    v-html="props.text"
    class="text-base md:text-lg text-zinc-600 dark:text-zinc-400 rounded mb-2"
    :class="{
      'border-l-4 pl-5 py-2 pr-2 bg-zinc-100 dark:bg-zinc-600 dark:border-zinc-700': props.quoted,
      selection_disabled: props.unselectable
    }"
  ></p>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: null },
  quoted: { type: Boolean, default: false },
  unselectable: { type: Boolean, default: false }
})
</script>

<style lang="css" scoped></style>

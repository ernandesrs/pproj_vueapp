<template>
  <code v-if="props.code" :class="getClass" v-text="props.text"></code>
  <p v-else-if="props.html?.length" :class="getClass" v-html="props.html"></p>
  <p v-else :class="getClass" v-text="props.text"></p>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: null },
  html: { type: String, default: null },
  code: { type: Boolean, default: false },
  quoted: { type: Boolean, default: false },
  unselectable: { type: Boolean, default: false }
})

const getClass = computed(() => {
  const baseClass = 'text-base md:text-lg text-zinc-600 dark:text-zinc-400 rounded mb-2'
  return (
    baseClass +
    (props.quoted || props.code
      ? ' border-l-4 pl-5 py-2 pr-2 bg-zinc-100 dark:bg-zinc-600 dark:border-zinc-700'
      : '') +
    (props.unselectable ? ' selection_disabled' : '') +
    (props.code ? ' !text-base antialiased ' : '')
  )
})
</script>

<style lang="css" scoped></style>

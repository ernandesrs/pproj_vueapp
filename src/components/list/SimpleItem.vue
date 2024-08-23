<template>
  <li
    class="py-2 px-2 block"
    :class="{
      'border-b dark:border-zinc-700': props.bordered
    }"
  >
    <span
      v-if="props.prependText?.length"
      class="inline font-semibold mr-1 text-zinc-700 dark:text-zinc-200"
      >{{ props.prependText }}:</span
    >
    <span class="inline text-zinc-500 dark:text-zinc-400">{{ props.text }}</span>
  </li>
</template>

<script setup>
const props = defineProps({
  prependText: { type: String, required: false },
  text: { type: String, required: true },
  bordered: { type: Boolean, default: false }
})
</script>

<style lang="css" scoped></style>

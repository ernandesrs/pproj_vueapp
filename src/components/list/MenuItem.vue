<template>
  <li
    class="flex items-center gap-x-2 bg-white hover:bg-zinc-100 duration-200 py-3 px-5 border-b border-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:border-zinc-700"
  >
    <icon-elem v-if="props.prependIcon" :name="props.prependIcon" />
    <div class="flex-1 flex flex-col px-3">
      <div class="flex-1" v-text="props.text"></div>
      <div v-if="props.caption" v-text="props.caption" class="flex-1 text-sm text-zinc-400"></div>
    </div>
    <icon-elem v-if="props.appendIcon" :name="props.appendIcon" />
  </li>
</template>

<script setup>
import IconElem from '../IconElem.vue'

const props = defineProps({
  prependIcon: { type: String, default: null, required: false },
  text: { type: String, required: true },
  caption: { type: String, required: true },
  appendIcon: { type: String, default: null, required: false }
})
</script>

<style lang="css" scoped></style>

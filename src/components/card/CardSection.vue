<template>
  <div class="flex-1 flex flex-col px-6 py-5 bg-zinc-50 dark:bg-zinc-800" :class="getRoundClass">
    <div v-if="props.title || props.subtitle" class="mb-2">
      <div
        v-if="props.title"
        v-html="props.title"
        class="text-base lg:text-lg text-zinc-600 dark:text-zinc-300"
      ></div>
      <div
        v-if="props.subtitle"
        v-html="props.subtitle"
        class="text-sm text-zinc-400 dark:text-zinc-400"
      ></div>
    </div>
    <div class="flex-1">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * This section is the first of a group of sections
   */
  first: {
    type: Boolean,
    default: false
  },

  /**
   * This section is the last of a group of sections
   */
  last: {
    type: Boolean,
    default: false
  },

  /**
   * This section is in the middle of a group of sections
   */
  middle: {
    type: Boolean,
    default: false
  },

  /**
   * Title
   */
  title: {
    type: [null, String],
    default: null
  },

  /**
   * Subtitle
   */
  subtitle: {
    type: [null, String],
    default: null
  },

  /**
   * Bordered
   */
  bordered: {
    type: Boolean,
    default: false
  },

  /**
   * Shadow
   */
  shadow: {
    type: Boolean,
    default: false
  }
})

/**
 *
 * Computed
 *
 */
const getRoundClass = computed(() => {
  return (
    (props.first
      ? 'rounded-tl-lg rounded-tr-lg'
      : props.last
        ? 'rounded-bl-lg rounded-br-lg'
        : props.middle
          ? 'rounded-none'
          : 'rounded-lg') +
    (props.bordered ? ' border border-zinc-200 dark:border-zinc-700' : '') +
    (props.shadow ? ' shadow' : '')
  )
})
</script>

<style lang="css" scoped></style>

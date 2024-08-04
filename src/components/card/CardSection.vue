<template>
  <div class="flex-1 flex flex-col px-6 py-5 bg-zinc-50" :class="getRoundClass">
    <div v-if="props.title || props.subtitle" class="mb-2">
      <div v-if="props.title" v-html="props.title" class="text-base lg:text-lg text-zinc-600"></div>
      <div v-if="props.subtitle" v-html="props.subtitle" class="text-sm text-zinc-400"></div>
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

  title: {
    type: [null, String],
    default: null
  },

  subtitle: {
    type: [null, String],
    default: null
  }
})

/**
 *
 * Computed
 *
 */
const getRoundClass = computed(() => {
  return props.first
    ? 'rounded-tl-lg rounded-tr-lg'
    : props.last
      ? 'rounded-bl-lg rounded-br-lg'
      : props.middle
        ? 'rounded-none'
        : 'rounded-lg'
})
</script>

<style lang="css" scoped></style>

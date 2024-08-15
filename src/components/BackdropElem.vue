<template>
  <div
    class="bg-zinc-200 dark:bg-zinc-800 w-full h-full top-0 left-0 rounded-lg absolute flex justify-center items-center z-50"
    :class="{ 'bg-opacity-75 dark:bg-opacity-75 animate-pulse': props.pulse }"
  >
    <div
      v-if="props.spin"
      class="border-purple-300 dark:border-purple-200 border-l-purple-700 border-t-purple-700 dark:border-l-purple-600 dark:border-t-purple-600 rounded-full animate-spin"
      :class="getSpinSize"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * Apply pulse effect
   */
  pulse: {
    type: Boolean,
    default: false
  },

  /**
   * Show loader spin
   */
  spin: {
    type: Boolean,
    default: false
  },

  /**
   * spin size: allows sm, base and lg
   */
  spinSize: {
    type: String,
    default: 'base'
  }
})

/**
 * Return a custom spin class
 */
const getSpinSize = computed(() => {
  return {
    sm: 'border-2 w-7 h-7',
    base: 'border-4 w-10 h-10',
    lg: 'border-8 w-16 h-16'
  }[props.spinSize]
})
</script>

<style lang="css" scoped></style>

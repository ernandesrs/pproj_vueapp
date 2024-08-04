<template>
  <div
    class="bg-zinc-200 bg-opacity-75 animate-pulse w-full h-full top-0 left-0 rounded-lg absolute flex justify-center items-center"
  >
    <div
      v-if="props.spin"
      class="border-l-purple-900 border-t-purple-900 border-r-purple-300 border-b-purple-300 rounded-full animate-spin"
      :class="getSpinSize"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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

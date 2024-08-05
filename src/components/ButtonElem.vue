<template>
  <button class="flex justify-center items-center gap-3 shadow duration-300" :class="getClass">
    <icon-elem
      v-if="props.prependIcon || props.icon"
      :name="props.prependIcon ?? props.icon"
      class="pointer-events-none"
    />
    <span v-if="props.text && !props.icon" v-html="props.text" class="pointer-events-none"></span>
    <icon-elem v-if="props.appendIcon" :name="props.appendIcon" class="pointer-events-none" />
  </button>
</template>

<script setup>
import IconElem from './IconElem.vue'
import { computed } from 'vue'

const props = defineProps({
  /**
   * Icon(only icon)
   */
  icon: {
    type: [null, String],
    default: null
  },

  /**
   * Prepend icon
   */
  prependIcon: {
    type: [null, String],
    default: null
  },

  /**
   * Append icon
   */
  appendIcon: {
    type: [null, String],
    default: null
  },

  /**
   * Text
   */
  text: {
    type: [null, String],
    default: null
  },

  /**
   * Colors: allows primary, secondary, success, info, danger and warning
   */
  color: {
    type: [null, String],
    default: 'primary'
  },

  /**
   * Variations: allows filled, outlined and text
   */
  variation: {
    type: String,
    default: 'filled'
  },

  /**
   * Button size: allows sm, base and lg
   */
  size: {
    type: String,
    default: 'base'
  },

  /**
   * Button circle
   */
  circle: {
    type: Boolean,
    default: false
  }
})

const getClass = computed(() => {
  const colors = {
    primary: 'bg-purple-700 text-zinc-100 hover:bg-purple-800'
  }
  const sizes = {
    sm: (props?.icon ? 'w-9 h-9' : 'h-9 px-5') + ' text-sm',
    base: (props?.icon ? 'w-11 h-11' : 'h-11 px-6') + ' text-base',
    lg: (props?.icon ? 'w-12 h-12' : 'h-12 px-8') + ' text-lg'
  }
  return (
    sizes[props.size] + ' ' + colors[props.color] + (props.circle ? ' rounded-full' : ' rounded-lg')
  )
})
</script>

<style lang="css" scoped></style>

<template>
  <button
    class="flex justify-center items-center gap-3 shadow duration-300 disabled:pointer-events-none disabled:bg-opacity-75 disabled:text-opacity-75"
    :class="getClass"
  >
    <icon-elem
      v-if="props.prependIcon || props.icon"
      :name="props.loading ? 'arrow-clockwise animate-spin' : (props.prependIcon ?? props.icon)"
      class="pointer-events-none"
    />
    <span v-if="props.text && !props.icon" v-html="props.text" class="pointer-events-none"></span>
    <icon-elem
      v-if="props.appendIcon"
      :name="props.loading ? 'arrow-clockwise animate-spin' : props.appendIcon"
      class="pointer-events-none"
    />
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
  },

  /**
   * Button loading
   */
  loading: {
    type: Boolean,
    default: false
  }
})

const getClass = computed(() => {
  const colors = {
    primary: 'bg-purple-700 text-zinc-100 hover:bg-purple-800',
    secondary: 'bg-fuchsia-700 text-zinc-100 hover:bg-fuchsia-800',
    success: 'bg-emerald-700 text-zinc-100 hover:bg-emerald-800',
    info: 'bg-sky-700 text-zinc-100 hover:bg-sky-800',
    danger: 'bg-rose-700 text-zinc-100 hover:bg-rose-800',
    warning: 'bg-yellow-600 text-zinc-100 hover:bg-yellow-700',
    dark: 'bg-zinc-700 text-zinc-100 hover:bg-zinc-800',
    light: 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
  }
  const sizes = {
    sm: (props?.icon ? 'w-9 h-9' : 'h-9 px-5') + ' text-sm',
    base: (props?.icon ? 'w-11 h-11' : 'h-11 px-6') + ' text-base',
    lg: (props?.icon ? 'w-12 h-12' : 'h-12 px-8') + ' text-lg'
  }
  return (
    sizes[props.size] +
    ' ' +
    colors[props.color] +
    (props.circle ? ' rounded-full' : ' rounded-lg') +
    (props.loading ? ' animate-pulse pointer-events-none' : '')
  )
})
</script>

<style lang="css" scoped></style>

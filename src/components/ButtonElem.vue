<template>
  <button
    class="flex justify-center items-center gap-3 duration-300 disabled:pointer-events-none disabled:text-opacity-75 border"
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
   * Variants: allows filled, outlined and text
   */
  variant: {
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
   * Button square
   */
  square: {
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
    primary: {
      filled:
        'bg-purple-700 text-zinc-100 border-purple-700 hover:bg-purple-800 dark:bg-purple-900 dark:border-purple-900 dark:hover:bg-purple-950',
      outlined:
        'border-purple-700 text-purple-700 hover:border-purple-900 hover:text-purple-900 dark:border-purple-700 dark:text-purple-700 dark:hover:border-purple-900 dark:hover:text-purple-900',
      text: 'text-purple-500 hover:text-purple-800'
    },
    secondary: {
      filled:
        'bg-fuchsia-700 text-zinc-100 border-fuchsia-700 hover:bg-fuchsia-800 dark:bg-fuchsia-900 dark:border-fuchsia-900 dark:hover:bg-fuchsia-950',
      outlined:
        'border-fuchsia-700 text-fuchsia-700 hover:border-fuchsia-900 hover:text-fuchsia-900',
      text: 'text-fuchsia-500 hover:text-fuchsia-800'
    },
    success: {
      filled:
        'bg-emerald-700 text-zinc-100 border-emerald-700 hover:bg-emerald-800 dark:bg-emerald-900 dark:border-emerald-900 dark:hover:bg-emerald-950',
      outlined:
        'border-emerald-700 text-emerald-700 hover:border-emerald-900 hover:text-emerald-900',
      text: 'text-emerald-500 hover:text-emerald-800'
    },
    info: {
      filled:
        'bg-sky-700 text-zinc-100 border-sky-700 hover:bg-sky-800 dark:bg-sky-900 dark:border-sky-900 dark:hover:bg-sky-950',
      outlined: 'border-sky-700 text-sky-700 hover:border-sky-900 hover:text-sky-900',
      text: 'text-sky-500 hover:text-sky-800'
    },
    danger: {
      filled:
        'bg-rose-700 text-zinc-100 border-rose-700 hover:bg-rose-800 dark:bg-rose-900 dark:border-rose-900 dark:hover:bg-rose-950',
      outlined: 'border-rose-700 text-rose-700 hover:border-rose-900 hover:text-rose-900',
      text: 'text-rose-500 hover:text-rose-800'
    },
    warning: {
      filled:
        'bg-yellow-600 text-zinc-100 border-yellow-700 hover:bg-yellow-700 dark:bg-yellow-900 dark:border-yellow-900 dark:hover:bg-yellow-950',
      outlined: 'border-yellow-600 text-yellow-600 hover:border-yellow-900 hover:text-yellow-900',
      text: 'text-yellow-500 hover:text-yellow-600'
    },
    dark: {
      filled:
        'bg-zinc-700 text-zinc-100 border-zinc-700 hover:bg-zinc-800 dark:bg-zinc-900 dark:border-zinc-900 dark:hover:bg-zinc-950',
      outlined: 'border-zinc-500 text-zinc-500 hover:border-zinc-800 hover:text-zinc-800',
      text: 'text-zinc-600 hover:text-zinc-800'
    },
    light: {
      filled:
        'bg-zinc-100 text-zinc-500 border-zinc-100 hover:bg-zinc-200 dark:bg-zinc-600 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700',
      outlined: 'border-zinc-300 text-zinc-400 hover:border-zinc-400 hover:text-zinc-500',
      text: 'text-zinc-500 hover:text-zinc-600'
    }
  }
  const sizes = {
    sm: (props?.icon ? 'w-9 h-9' : 'h-9 px-5') + ' text-sm',
    base: (props?.icon ? 'w-11 h-11' : 'h-11 px-6') + ' text-base',
    lg: (props?.icon ? 'w-12 h-12' : 'h-12 px-8') + ' text-lg'
  }
  return (
    sizes[props.size] +
    ' ' +
    colors[props.color][props.variant] +
    (props.circle ? ' rounded-full' : props.square ? '' : ' rounded-lg') +
    (props.loading ? ' animate-pulse pointer-events-none' : '') +
    (props.variant != 'filled'
      ? props.variant == 'text'
        ? ' border-transparent'
        : ' disabled:border-opacity-50'
      : ' disabled:bg-opacity-75 shadow')
  )
})
</script>

<style lang="css" scoped></style>

<template>
  <div
    class="flex justify-center items-center shadow-md dark:shadow-zinc-900 overflow-hidden relative border-zinc-100 bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800"
    :class="
      {
        xs: 'w-8 border-2' + (!props.avatar ? ' h-6' : ' h-8'),
        sm: 'w-20 border-2' + (!props.avatar ? ' h-14' : ' h-20'),
        base: 'w-32 border-2' + (!props.avatar ? ' h-24' : ' h-32'),
        lg: 'w-36 md:w-48 border-4' + (!props.avatar ? ' h-28 md:h-32' : ' h-36 md:h-48'),
        xl:
          'w-40 md:w-56 lg:w-64 border-8' +
          (!props.avatar ? ' h-28 md:h-40 lg:h-44' : ' h-40 md:h-56 lg:h-64')
      }[props.size] + (props.avatar ? ' rounded-full' : ' rounded-lg')
    "
  >
    <img
      v-if="props.url"
      class="w-full h-full absolute top-0 left-0"
      :class="props.avatar ? 'rounded-full' : ''"
      :src="props.url"
      :alt="props.alternativeText"
    />
    <span
      v-text="(props.alternativeText ?? 'T')[0]"
      class="inline text-zinc-400 font-semibold"
      :class="
        {
          xs: 'text-sm',
          sm: 'text-lg',
          base: 'text-2xl',
          xl: 'text-3xl md:text-4xl',
          xl: 'text-3xl md:text-4xl lg:text-5xl'
        }[props.size]
      "
    ></span>
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * Thumbnail size: allows xs, sm, base, lg, xl
   */
  size: {
    type: String,
    default: 'xl'
  },

  /**
   *
   * Url to thumbnail
   *
   */
  url: {
    type: String,
    default: null
  },

  /**
   *
   * Alternative text to thumbnail
   *
   */
  alternativeText: {
    type: String,
    default: null
  },

  /**
   *
   * If true, thumbnail is avatar
   */
  avatar: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="css" scoped></style>

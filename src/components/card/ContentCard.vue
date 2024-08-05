<template>
  <div class="flex flex-col rounded-lg">
    <!-- header -->
    <div v-if="showHeader" class="flex items-center gap-x-6 py-5">
      <!-- icon/title/subtitle -->
      <div class="flex flex-col cursor-default">
        <div v-if="props.title" class="flex items-center gap-x-2" :class="getTitleClass">
          <icon-elem v-if="props.icon" :name="props.icon" />
          <component :is="props.titleTag">{{ props.title }}</component>
        </div>
        <component :is="props.subtitleTag" class="text-sm text-zinc-500 dark:text-zinc-500">{{
          props.subtitle
        }}</component>
      </div>

      <!-- right header content -->
      <div class="flex-1 flex justify-end items-center gap-2">
        <slot name="headerAppend" />
      </div>
    </div>

    <!-- content/footer -->
    <div
      class="flex-1 flex flex-col rounded-lg relative"
      :class="{ shadow: !props.noContainer && !props.noShadow }"
    >
      <backdrop-elem v-if="props.loading" spin spinSize="base" />

      <div
        class="rounded-lg flex-1 flex flex-col"
        :class="{ 'rounded-bl-none rounded-br-none': showFooter }"
      >
        <slot />
      </div>

      <!-- footer -->
      <div
        v-if="showFooter"
        class="flex-1 flex items-center bg-zinc-100 px-6 py-5 rounded-bl-lg rounded-br-lg"
      >
        <div v-if="$slots?.prependFooter" class="flex-1 flex justify-start items-center mr-2">
          <slot name="prependFooter" />
        </div>
        <div v-if="$slots?.middleFooter" class="flex-1 flex justify-center items-center">
          <slot name="middleFooter" />
        </div>
        <div v-if="$slots?.appendFooter" class="flex-1 flex justify-end items-center ml-2">
          <slot name="appendFooter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackdropElem from '../BackdropElem.vue'
import IconElem from '../IconElem.vue'
import { computed, useSlots } from 'vue'

const props = defineProps({
  /**
   * Loading mode.
   */
  loading: {
    type: Boolean,
    default: false
  },

  /**
   * Header icon. Needs to be valid Bootstrap Icon class.
   */
  icon: {
    type: [null, String],
    default: null
  },

  /**
   * Header title.
   */
  title: {
    type: [null, String],
    default: null
  },

  /**
   * Header subtitle.
   */
  subtitle: {
    type: [null, String],
    default: null
  },

  /**
   * Header title tag. Default is h1.
   */
  titleTag: {
    type: String,
    default: 'h1'
  },

  /**
   * Header subtitle tag. Default is div.
   */
  subtitleTag: {
    type: String,
    default: 'div'
  },

  /**
   * If true, remove content container shadow
   */
  noShadow: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()

/**
 *
 * Computeds
 *
 */
const showHeader = computed(() => {
  return props.title != null || props.subtitle != null
})

const showFooter = computed(() => {
  return slots?.prependFooter || slots?.middleFooter || slots?.appendFooter
})

const getTitleClass = computed(() => {
  const titleStyles = {
    h1: 'text-xl lg:text-2xl font-medium text-zinc-700 dark:text-zinc-300',
    h2: 'text-lg lg:text-xl font-medium text-zinc-500 dark:text-zinc-400',
    h3: 'text-base lg:text-lg font-medium text-zinc-400 dark:text-zinc-500',
    h4: 'text-sm lg:text-base font-semibold text-zinc-300 dark:text-zinc-500'
  }

  return titleStyles[props.titleTag] + (props?.subtitle ? ' mb-1' : '')
})
</script>

<style lang="css" scoped></style>

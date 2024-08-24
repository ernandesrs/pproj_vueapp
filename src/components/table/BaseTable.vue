<template>
  <div
    class="w-full overflow-x-auto"
    :style="props.maxHeight ? 'max-height:' + props.maxHeight + 'px' : ''"
  >
    <table class="w-full table-auto">
      <thead v-if="slots?.thead">
        <tr
          class="text-left bg-zinc-100 text-zinc-600 cursor-default dark:bg-zinc-900 dark:bg-opacity-15 dark:text-zinc-300 border-b dark:border-zinc-600"
        >
          <slot name="thead" />
        </tr>
      </thead>
      <tbody>
        <template v-for="(value, key) in props.items" :key="key">
          <tr
            class="border-b dark:border-zinc-600 text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100 duration-200"
            :class="{
              'bg-white dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800': key % 2 == 0,
              'bg-zinc-100 bg-opacity-50 dark:bg-zinc-500 dark:bg-opacity-25 hover:bg-zinc-200 dark:hover:bg-zinc-600':
                key % 2 != 0
            }"
          >
            <slot v-bind="{ itemValue: value, itemKey: key }" />
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

const props = defineProps({
  /**
   * Table list items
   */
  items: { type: Array, default: () => [] },

  /**
   * Table max height
   */
  maxHeight: { type: Number, default: null }
})
</script>

<style lang="css" scoped></style>

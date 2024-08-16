<template>
  <small
    class="mt-1 ml-1 cursor-default flex items-center"
    :class="{
      'text-slate-400 dark:text-slate-500': props.type == 'default',
      'text-emerald-400 dark:text-emerald-600': props.type == 'success',
      'text-rose-400 dark:text-rose-600': props.type == 'fail'
    }"
  >
    <icon-elem
      :name="
        {
          default: 'info-circle',
          success: 'check-circle',
          fail: 'exclamation-circle'
        }[props.type]
      "
    />
    <span class="inline ml-1 truncate" v-html="props.text"></span>
  </small>
</template>

<script setup>
import IconElem from '../IconElem.vue'

const props = defineProps({
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'default'
  }
})
</script>

<style lang="css" scoped></style>

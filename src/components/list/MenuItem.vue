<template>
  <li
    class="flex items-center bg-white hover:bg-zinc-100 duration-200 py-3 px-5 border-b border-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:border-zinc-700"
  >
    <slot name="prepend" />
    <icon-elem v-if="!slots.prepend && props.prependIcon" :name="props.prependIcon" />

    <template v-if="!props.to">
      <div class="flex-1 flex flex-col px-4">
        <!-- repeated #1 -->
        <div class="flex-1" v-text="props.text"></div>
        <div v-if="props.caption" v-text="props.caption" class="flex-1 text-sm text-zinc-400"></div>
        <!-- repeated #1 -->
      </div>
    </template>
    <router-link v-else :to="props.to" v-bind="getAttrs" class="flex-1 flex flex-col px-4">
      <!-- repeated #1 -->
      <div class="flex-1" v-text="props.text"></div>
      <div v-if="props.caption" v-text="props.caption" class="flex-1 text-sm text-zinc-400"></div>
      <!-- repeated #1 -->
    </router-link>

    <slot name="append" />
    <icon-elem v-if="!slots.append && props.appendIcon" :name="props.appendIcon" />
  </li>
</template>

<script setup>
import { useSlots, computed } from 'vue'
import IconElem from '../IconElem.vue'

const slots = useSlots()

const props = defineProps({
  prependIcon: { type: String, default: null, required: false },
  text: { type: String, required: true },
  caption: { type: String, required: false },
  appendIcon: { type: String, default: null, required: false },
  to: { type: Object, default: null },
  title: { type: String, default: null },
  target: { type: String, default: '_self' }
})

const getAttrs = computed(() => {
  let cAttrs = {}

  if (props.to) {
    if (props?.title) {
      cAttrs = { ...cAttrs, title: props?.title }
    }

    if (props?.target) {
      cAttrs = { ...cAttrs, target: props?.target }
    }
  }

  console.log(cAttrs)

  return cAttrs
})
</script>

<style lang="css" scoped></style>

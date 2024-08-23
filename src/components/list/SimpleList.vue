<template>
  <component :is="props.tag" class="flex flex-col gap-y-1 p-1">
    <template v-if="props.items?.length">
      <simple-item
        v-for="(v, k) in props.items"
        :key="k"
        :prepend-text="v.prependText ?? null"
        :text="v.text"
        :bordered="bordered"
      />
    </template>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup>
import SimpleItem from './SimpleItem.vue'

const props = defineProps({
  tag: { type: String, default: 'ul' },
  items: { type: Array, default: () => [] },
  bordered: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped></style>

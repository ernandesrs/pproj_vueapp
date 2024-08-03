<template>
  <button class="bg-zinc-100 py-2 px-3 text-2xl shadow rounded-lg">
    <icon-elem :name="props.showing ? 'list-nested' : 'list'" />
  </button>
</template>

<script setup>
import IconElem from '../IconElem.vue'

const props = defineProps({
  showing: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>

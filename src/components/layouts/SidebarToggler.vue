<template>
  <button class="bg-transparent py-1 px-2 text-3xl shadow rounded-lg">
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

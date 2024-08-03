<template>
  <button class="bg-zinc-100 py-2 px-3 text-2xl shadow rounded-lg">
    <i v-if="props.showing" class="bi bi-list-nested"></i>
    <i v-if="!props.showing" class="bi bi-list"></i>
  </button>
</template>

<script setup>
const props = defineProps({
  showing: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>

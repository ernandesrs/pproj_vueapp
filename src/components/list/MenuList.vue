<template>
  <nav>
    <ul
      class="flex flex-col border border-zinc-300 rounded-lg overflow-hidden dark:border-zinc-700"
      :class="{ '!border-transparent': props.borderless }"
    >
      <template v-for="(value, key) in props.items" :key="key">
        <slot :itemKey="key" :itemValue="value" />
      </template>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, default: () => [] },
  borderless: { type: Boolean, default: false }
})
</script>

<style lang="css" scoped></style>

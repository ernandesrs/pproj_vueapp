<template>
  <component
    :is="props.th ? 'th' : 'td'"
    class="px-6"
    :class="{
      'py-4': props.th,
      'py-3': !props.th
    }"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  /**
   * The colum tag is 'th'. Default is 'td'
   */
  th: { type: Boolean, default: false }
})
</script>

<style lang="css" scoped></style>

<template>
  <Transition name="sidebar">
    <aside
      v-show="props.show"
      class="fixed z-40 lg:relative sidebar-width sm:w-full h-full sm:max-w-[325px] pt-6 pb-6 pl-6 duration-300 ease-in-out"
      :class="{
        'sideabar-max-width': props.miniOn
      }"
    >
      <div class="bg-zinc-800 w-full h-full flex flex-col rounded-lg shadow overflow-hidden">
        <!-- sidebar content -->
        <div class="flex-1 w-full overflow-y-auto p-5">
          <slot name="sidebarContent" />
        </div>
        <!-- /sidebar content -->
      </div>
    </aside>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  miniOn: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="css" scoped>
.sidebar-width {
  width: calc(100% - 1.5rem);
}

.sideabar-max-width {
  max-width: calc(100px + 1.5rem);
}

.sidebar-enter-active {
  @apply duration-300 ease-in-out;
}

.sidebar-leave-active {
  @apply duration-100 ease-in;
}

.sidebar-enter-from,
.sidebar-leave-to {
  @apply w-12 -translate-x-1/3;
}
</style>

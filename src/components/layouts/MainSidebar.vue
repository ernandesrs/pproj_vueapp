<template>
  <aside class="fixed z-40 lg:relative w-full h-full max-w-[85vw] sm:max-w-[325px] pt-6 pb-6 pl-6">
    <div class="bg-zinc-800 w-full h-full flex flex-col rounded-lg shadow overflow-hidden">
      <!-- sidebar content -->
      <div class="flex-1 w-full overflow-y-auto p-5">
        <slot name="sidebarContent" />
      </div>
      <!-- /sidebar content -->
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>

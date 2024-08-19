<template>
  <app-alert />

  <div class="w-full min-h-screen flex items-center justify-center bg-zinc-100 p-6">
    <router-view />
  </div>
</template>

<script setup>
import AppAlert from './AppAlert.vue'
</script>

<style lang="css" scoped></style>

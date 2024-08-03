<template>
  <router-view />
</template>

<script setup>
import { useAppStore } from '@/stores/app'

useAppStore().windowResizeAddEvent()
</script>

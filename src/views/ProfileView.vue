<template>
  <main>Profile View</main>
</template>

<script setup>
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

appStore.updatePageTitle('Profile')
</script>

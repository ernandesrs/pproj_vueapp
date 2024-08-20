<template>
  <main-view-base page-title="Visão geral" hidde-header :loading-content="loadingContent">
    <div class="col-span-12">
      <p>Overview content</p>
    </div>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import { ref } from 'vue'

const loadingContent = ref(false)
</script>

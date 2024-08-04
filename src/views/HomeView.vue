<template>
  <div class="grid grid-cols-12 gap-6">
    <content-card icon="pie-chart-fill" title="Overview" no-shadow class="col-span-12">
      <p>Content #1</p>

      <template #headerAppend>
        <button type="button" class="shadow bg-purple-800 text-zinc-100 px-5 py-2 rounded-lg">
          Button #1
        </button>
      </template>
    </content-card>
  </div>
</template>

<script setup>
import ContentCard from '@/components/card/ContentCard.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

appStore.updatePageTitle('Home')
</script>

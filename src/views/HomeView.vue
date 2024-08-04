<template>
  <div class="grid grid-cols-12 gap-6">
    <content-card
      icon="pie-chart"
      title="Home"
      subtitle="This is a subtitle for the home page"
      class="col-span-12"
    >
      <template #content>
        <p>Content #1</p>
      </template>
    </content-card>

    <content-card
      icon="pie-chart"
      title="Home"
      subtitle="This is a subtitle for the home page"
      class="col-span-12 sm:col-span-6"
    >
      <template #content>
        <p>Content #1</p>
      </template>
    </content-card>

    <content-card
      icon="pie-chart"
      subtitle="This is a subtitle for the home page"
      class="col-span-12 sm:col-span-6"
    >
      <template #content>
        <p>Content #1</p>
      </template>
    </content-card>

    <content-card class="col-span-12 sm:col-span-6">
      <template #content>
        <p>Content #1</p>
      </template>
    </content-card>

    <content-card
      title="With footer"
      subtitle="This is a subtitle for the with footer"
      class="col-span-12 sm:col-span-6"
    >
      <template #content>
        <p>Content #1</p>
      </template>

      <template #prependFooter>Prepend</template>
      <template #middleFooter>Middle</template>
      <template #appendFooter>Append</template>
    </content-card>
  </div>
</template>

<script setup>
import ContentCard from '@/components/card/ContentCard.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

appStore.updatePageTitle('Home')
</script>

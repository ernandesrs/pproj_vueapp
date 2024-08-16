<template>
  <main-view-base
    page-icon="input-cursor-text"
    page-title="Form fields"
    page-subtitle="Veja exemplos de campos de formulário"
    :loading-content="loadingContent"
  >
    <card-section
      title="Input text"
      subtitle="Lorem dolor input field text"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
    </card-section>

    <card-section
      title="With feedback"
      subtitle="Lorem dolor input field text"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
    </card-section>

    <card-section
      title="With validation"
      subtitle="Lorem dolor input field text"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
    </card-section>
  </main-view-base>
</template>

<script setup>
import CardSection from '@/components/card/CardSection.vue'
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import { useAppStore } from '@/stores/app'
import { ref } from 'vue'

const appStore = useAppStore()

const loadingContent = ref(true)

/**
 *
 * Calls
 *
 */
appStore.updatePageTitle('Form fields')

setTimeout(() => {
  loadingContent.value = false
}, 100)
</script>

<style lang="css" scoped></style>

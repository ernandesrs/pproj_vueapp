<template>
  <content-card
    :icon="props?.hiddeHeader ? null : props.pageIcon"
    :title="props?.hiddeHeader ? null : props.pageTitle"
    :subtitle="props?.hiddeHeader ? null : props.pageSubtitle"
    no-shadow
    title-tag="h1"
    class="col-span-12"
  >
    <div class="grid grid-cols-12 gap-6">
      <slot />
    </div>
    <template #headerAppend>
      <slot name="pageHeaderAppend" />
    </template>
  </content-card>
</template>

<script setup>
import ContentCard from '@/components/card/ContentCard.vue'
import { useAppStore } from '@/stores/app'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  /**
   * Page title
   */
  pageTitle: {
    type: [null, String],
    default: null
  },

  /**
   * Page subtitle
   */
  pageSubtitle: {
    type: [null, String],
    default: null
  },

  /**
   * Page icon
   */
  pageIcon: {
    type: [null, String],
    default: null
  },

  /**
   * Hidden page header with icon/title/subtitle/actions
   */
  hiddeHeader: {
    type: Boolean,
    default: false
  },

  /**
   * Loading content
   */
  loadingContent: {
    type: Boolean,
    default: null
  }
})

const appStore = useAppStore()

const route = useRoute()

watch(
  () => route,
  () => {
    appStore.stateData.loading = false
  },
  { immediate: true, deep: true }
)

watch(
  () => props.loadingContent,
  (n) => {
    if (n) {
      appStore.stateData.loading = true
    } else {
      appStore.stateData.loading = false
    }
  },
  { immediate: true }
)

appStore.updatePageTitle(props.pageTitle)
</script>

<style lang="css" scoped></style>

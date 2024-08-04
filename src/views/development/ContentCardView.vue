<template>
  <div class="grid grid-cols-12 gap-6">
    <content-card
      icon="window"
      title="Header title"
      subtitle="This is a header subtitle"
      class="col-span-12"
    >
      <card-section>
        <template #content> This is a card section with the content from a content card </template>
      </card-section>
    </content-card>

    <content-card icon="window" title="Without subtitle" class="col-span-12 sm:col-span-6">
      <card-section>
        <template #content> This is a card section with the content from a content card </template>
      </card-section>
    </content-card>

    <content-card icon="window" class="col-span-12 sm:col-span-6">
      <card-section>
        <template #content> This is a content card without header </template>
      </card-section>
    </content-card>

    <content-card
      title="Without icon"
      subtitle="This is a header subtitle"
      class="col-span-12 sm:col-span-6"
    >
      <card-section>
        <template #content> This is a content card without icon </template>
      </card-section>
    </content-card>

    <content-card
      title="Multiple sections"
      subtitle="This is a content card with may sections"
      class="col-span-12 sm:col-span-6"
    >
      <card-section first title="Section title" subtitle="This is a section subtitle">
        <template #content> This is a content card </template>
      </card-section>
      <hr />
      <card-section middle title="Section title" subtitle="This is a section subtitle">
        <template #content> This is a content card </template>
      </card-section>
      <hr />
      <card-section last title="Section title" subtitle="This is a section subtitle">
        <template #content> This is a content card </template>
      </card-section>
    </content-card>

    <content-card
      icon="window"
      title="Header title"
      subtitle="This is a header subtitle"
      class="col-span-12"
      no-shadow
    >
      <p>Withou shadow and without card section</p>
    </content-card>

    <content-card
      icon="window"
      title="Loading"
      subtitle="This is a header subtitle"
      class="col-span-12 sm:col-span-6"
      loading
    >
      <card-section>
        <template #content>
          <p>Card loading</p>
        </template>
      </card-section>
    </content-card>
  </div>
</template>

<script setup>
import CardSection from '@/components/card/CardSection.vue'
import ContentCard from '@/components/card/ContentCard.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

/**
 *
 * Calls
 *
 */
appStore.updatePageTitle('Content Cards')
</script>

<style lang="css" scoped></style>

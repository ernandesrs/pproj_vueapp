<template>
  <main-view-base page-title="Visão geral" hidde-header>
    <template #pageHeaderAppend>
      <button type="button" class="shadow bg-purple-800 text-zinc-100 px-5 py-2 rounded-lg">
        Button #1
      </button>
    </template>

    <content-card
      icon="collection-fill"
      title="Content card"
      title-tag="h1"
      subtitle="Lorem ipsum dolor sit amet consectetur."
      class="col-span-12 sm:col-span-6"
    >
      <card-section>
        <template #content> A </template>
      </card-section>
    </content-card>

    <content-card
      icon="collection-fill"
      title="Content card"
      title-tag="h1"
      subtitle="Lorem ipsum dolor sit amet consectetur."
      class="col-span-12 sm:col-span-6"
    >
      <card-section>
        <template #content> B </template>
      </card-section>
    </content-card>

    <content-card
      icon="collection-fill"
      title="Content card"
      title-tag="h1"
      subtitle="Lorem ipsum dolor sit amet consectetur."
      class="col-span-12"
    >
      <card-section>
        <template #content> C </template>
      </card-section>
    </content-card>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import ContentCard from '@/components/card/ContentCard.vue'
import CardSection from '@/components/card/CardSection.vue'
</script>

<template>
  <content-card
    icon="person-circle"
    title="Profile"
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    no-shadow
  >
    <div class="grid grid-cols-12 gap-6">
      <content-card class="col-span-12 md:col-span-5 xl:col-span-4">
        <card-section first title="Avatar" subtitle="Your profile avatar">
          <template #content>
            <div class="flex justify-center items-center p-5">
              <thumbnail-elem avatar />
            </div>
          </template>
        </card-section>
        <separator-elem />
        <card-section last title="Details" subtitle="Your profile details">
          <template #content> Content </template>
        </card-section>
      </content-card>

      <content-card class="col-span-12 md:col-span-7 xl:col-span-8">
        <card-section title="Basic data" subtitle="Your profile basic data">
          <template #content> Content </template>
        </card-section>
      </content-card>
    </div>
  </content-card>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import ContentCard from '@/components/card/ContentCard.vue'
import CardSection from '@/components/card/CardSection.vue'
import ThumbnailElem from '@/components/ThumbnailElem.vue'
import SeparatorElem from '@/components/SeparatorElem.vue'

const appStore = useAppStore()

appStore.updatePageTitle('Profile')
</script>

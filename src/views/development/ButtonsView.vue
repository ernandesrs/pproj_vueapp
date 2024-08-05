<template>
  <content-card
    icon="collection-fill"
    title="Buttons"
    subtitle="This is all button options and variations"
    class="col-span-12"
  >
    <card-section first>
      <template #content>
        <div class="flex justify-center gap-x-3">
          <div class="flex flex-col gap-2">
            <label for="color" class="text-zinc-400">Color</label>
            <select v-model="compData.color" id="color" class="border px-4 py-2 rounded-lg">
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="info">Info</option>
              <option value="danger">Danger</option>
              <option value="warning">Warning</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="variants" class="text-zinc-400">Variants</label>
            <select v-model="compData.variant" id="variants" class="border px-4 py-2 rounded-lg">
              <option value="filled">Filled</option>
              <option value="outlined">Outlined</option>
              <option value="text">Text</option>
            </select>
          </div>
        </div>
      </template>
    </card-section>
    <separator-elem />
    <card-section last>
      <template #content>
        <div class="grid grid-cols-12 gap-6">
          <buttons-partials
            title="Size base"
            subtitle="Buttons size base"
            :color="compData.color"
            :variant="compData.variant"
            size="base"
          />

          <buttons-partials
            title="Size small"
            subtitle="Buttons size small"
            :color="compData.color"
            :variant="compData.variant"
            size="sm"
          />

          <buttons-partials
            title="Size large"
            subtitle="Buttons size large"
            :color="compData.color"
            :variant="compData.variant"
            size="lg"
          />
        </div>
      </template>
    </card-section>
  </content-card>
</template>

<script setup>
import ContentCard from '@/components/card/ContentCard.vue'
import CardSection from '@/components/card/CardSection.vue'
import ButtonsPartials from './partials/ButtonsPartials.vue'
import SeparatorElem from '@/components/SeparatorElem.vue'
import { reactive } from 'vue'

const compData = reactive({
  color: 'primary',
  variant: 'filled'
})
</script>

<style lang="css" scoped></style>

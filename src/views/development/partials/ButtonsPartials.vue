<template>
  <card-section
    bordered
    shadow
    :title="props.title"
    :subtitle="props.subtitle"
    class="col-span-12 sm:col-span-6"
  >
    <template #content>
      <div class="flex flex-wrap justify-center items-center gap-3">
        <button-elem
          text="Only text"
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
        />
        <button-elem
          prepend-icon="arrow-left"
          text="Prepend icon"
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
        />
        <button-elem
          append-icon="arrow-right"
          text="Append icon"
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
        />
        <button-elem
          icon="square"
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
        />
        <button-elem
          icon="circle"
          circle
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
        />
        <button-elem
          append-icon="ban"
          text="Disabled"
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
          disabled
        />
        <button-elem
          append-icon="arrow-right"
          text="Loading"
          :color="props.color"
          :variant="props.variant"
          :size="props.size"
          loading
        />
      </div>
    </template>
  </card-section>
</template>

<script setup>
import ButtonElem from '@/components/ButtonElem.vue'
import CardSection from '@/components/card/CardSection.vue'

const props = defineProps(['title', 'subtitle', 'color', 'variant', 'size'])
</script>

<style lang="css" scoped></style>

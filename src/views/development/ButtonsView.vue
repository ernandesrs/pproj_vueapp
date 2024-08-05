<template>
  <content-card
    icon="collection-fill"
    title="Buttons"
    subtitle="This is all button options and variations"
    class="col-span-12"
  >
    <card-section>
      <template #content>
        <div class="flex justify-center items-center gap-3">
          <button-elem text="Only text" />
          <button-elem prepend-icon="arrow-left" text="Prepend icon" />
          <button-elem append-icon="arrow-right" text="Append icon" />
          <button-elem icon="square" />
          <button-elem icon="circle" circle />
        </div>
      </template>
    </card-section>
  </content-card>
</template>

<script setup>
import ContentCard from '@/components/card/ContentCard.vue'
import CardSection from '@/components/card/CardSection.vue'
import ButtonElem from '@/components/ButtonElem.vue'
</script>

<style lang="css" scoped></style>

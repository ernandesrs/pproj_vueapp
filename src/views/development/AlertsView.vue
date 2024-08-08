<template>
  <main-view-base
    page-icon="pip-fill"
    page-title="Alertas"
    page-subtitle="Veja exemplos de alertas"
  >
    <card-section
      title="Card #1"
      subtitle="Examplo de alerta #1"
      bordered
      class="col-span-12 sm:col-span-6"
    >
      <template #content></template>
    </card-section>

    <card-section
      title="Card #2"
      subtitle="Examplo de alerta #2"
      bordered
      class="col-span-12 sm:col-span-6"
    >
      <template #content></template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import CardSection from '@/components/card/CardSection.vue'
</script>

<style lang="css" scoped></style>

<template>
  <main-view-base
    page-icon="pip-fill"
    page-title="Alertas"
    page-subtitle="Veja exemplos de alertas"
  >
    <card-section bordered class="col-span-12">
      <template #content>
        <div class="p-3 grid grid-cols-12 gap-5">
          <select
            v-model="alertData.color"
            class="col-span-6 capitalize px-6 py-3 border rounded-lg"
          >
            <option value="success">success</option>
            <option value="info">info</option>
            <option value="warning">warning</option>
            <option value="danger">danger</option>
            <option value="error">error</option>
            <option value="denied">denied</option>
            <option value="fail">fail</option>
          </select>

          <input
            type="text"
            v-model="alertData.title"
            class="col-span-6 flex-1 px-6 py-3 border rounded-lg"
          />
          <textarea
            v-model="alertData.text"
            class="col-span-12 px-6 py-3 border rounded-lg"
          ></textarea>
        </div>
      </template>
    </card-section>

    <card-section
      title="Básico"
      subtitle="Um alerta básico"
      bordered
      class="col-span-12 sm:col-span-6 md:col-span-4"
    >
      <template #content>
        <button-elem v-on:click="alertify" color="danger" text="Alertar" />
      </template>
    </card-section>

    <card-section
      title="Com timer"
      subtitle="Após o tempo determinado, o alerta se fechará automaticamente"
      bordered
      class="col-span-12 sm:col-span-6 md:col-span-4"
    >
      <template #content>
        <button-elem v-on:click="alertifyWithTimer" color="danger" text="Alertar" />
      </template>
    </card-section>

    <card-section
      title="Flash alert"
      subtitle="Será adicionado ao localStorage e exibido ao trocar página(Vue Router)"
      bordered
      class="col-span-12 sm:col-span-6 md:col-span-4"
    >
      <template #content>
        <button-elem v-on:click="flashAlertify2" color="danger" text="Alertar" />

        <div v-show="flashAdded" class="text-emerald-500 mt-2">
          Adicionado! Agora troque de página.
        </div>
      </template>
    </card-section>

    <card-section
      title="Flash alert #2"
      subtitle="Será adicionado ao localStorage e exibido ao trocar ou recarregar página"
      bordered
      class="col-span-12 sm:col-span-6 md:col-span-4"
    >
      <template #content>
        <button-elem v-on:click="flashAlertify" color="danger" text="Alertar" />
      </template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import CardSection from '@/components/card/CardSection.vue'
import ButtonElem from '@/components/ButtonElem.vue'
import { useAlertStore } from '@/stores/alert'
import { reactive, ref } from 'vue'

const alertStore = useAlertStore()

const flashAdded = ref(false)

const alertData = reactive({
  color: 'success',
  title: 'Título do alerta',
  text: 'Este é o texto para o componente de alerta'
})

const addAlert = (duration = null, flash = false) => {
  alertStore.add(alertData.text, alertData.title, alertData.color, duration, flash)
}

const alertify = () => {
  addAlert(null, false)
}

const alertifyWithTimer = () => {
  addAlert(5000, false)
}

const flashAlertify = () => {
  addAlert(5000, true)
  window.location.reload()
}

const flashAlertify2 = () => {
  addAlert(5000, true)
  flashAdded.value = true
}
</script>

<style lang="css" scoped></style>

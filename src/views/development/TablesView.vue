<template>
  <main-view-base
    page-title="Tables"
    page-subtitle="All tables options example"
    page-icon="table"
    :loading-content="loadingContent"
  >
    <card-section bordered title="Titles" subtitle="All title options" class="col-span-12">
      <template #content> </template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import CardSection from '@/components/card/CardSection.vue'
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import { axios } from '@/core/plugins/requester'
import { reactive, ref } from 'vue'

const loadingContent = ref(true)

const stateData = reactive({
  users: null
})

const loadTableContent = () => {
  axios
    .request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get'
    })
    .then((resp) => {
      stateData.users = resp.data
    })
    .catch((resp) => {
      console.log(resp)
    })
    .finally(() => {
      loadingContent.value = false
    })
}

loadTableContent()
</script>

<style lang="css" scoped></style>

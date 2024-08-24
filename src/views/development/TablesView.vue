<template>
  <main-view-base
    page-title="Tables"
    page-subtitle="All tables options example"
    page-icon="table"
    :loading-content="loadingContent"
  >
    <card-section bordered title="Titles" subtitle="All title options" class="col-span-12">
      <template #content>
        <base-table :items="stateData.users">
          <template #thead>
            <column-table th>ID</column-table>
            <column-table th>Avatar</column-table>
            <column-table th>Nome</column-table>
            <column-table th>Usuário</column-table>
            <column-table th>E-mail</column-table>
          </template>

          <template v-slot="{ itemValue }">
            <column-table>
              {{ itemValue.id }}
            </column-table>
            <column-table>
              <thumbnail-elem avatar size="xs" :alternative-text="itemValue.name" />
            </column-table>
            <column-table>
              {{ itemValue.name }}
            </column-table>
            <column-table>
              {{ itemValue.username }}
            </column-table>
            <column-table>
              {{ itemValue.email }}
            </column-table>
          </template>
        </base-table>
      </template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import CardSection from '@/components/card/CardSection.vue'
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import BaseTable from '@/components/table/BaseTable.vue'
import ColumnTable from '@/components/table/ColumnTable.vue'
import ThumbnailElem from '@/components/ThumbnailElem.vue'
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

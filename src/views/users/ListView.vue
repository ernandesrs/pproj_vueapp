<template>
  <main-view-base
    icon="people"
    title="Usuários"
    subtitle="Listando usuários registrados"
    :loading-content="loadingContent"
  >
    <card-section bordered class="col-span-12">
      <base-table :items="compState.users" class="col-span-12">
        <template #thead>
          <column-table th>ID</column-table>
          <column-table th>Avatar</column-table>
          <column-table th>Nome</column-table>
          <column-table th>Usuário</column-table>
          <column-table th>E-mail</column-table>
        </template>

        <template v-slot="{ itemValue }">
          <column-table>{{ itemValue.id }}</column-table>
          <column-table>
            <thumbnail-elem
              :alternative-text="itemValue.first_name"
              :url="itemValue.avatar_url"
              avatar
              size="xs"
            />
          </column-table>
          <column-table>{{ itemValue.first_name + ' ' + itemValue.last_name }}</column-table>
          <column-table>{{ itemValue.username }}</column-table>
          <column-table>{{ itemValue.email }}</column-table>
        </template>
      </base-table>
    </card-section>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import CardSection from '@/components/card/CardSection.vue'
import BaseTable from '@/components/table/BaseTable.vue'
import ColumnTable from '@/components/table/ColumnTable.vue'
import ThumbnailElem from '@/components/ThumbnailElem.vue'
import { apiRequester } from '@/core/plugins/requester'
import { reactive, ref } from 'vue'

/**
 *
 * Vars
 */
const loadingContent = ref(true)

const compState = reactive({
  users: null,
  limit: 10
})

/**
 *
 * Methods
 *
 */
const loadPageContent = () => {
  const url = '/admin/users?limit=' + compState.limit
  apiRequester(
    { url: url, method: 'get' },

    // success
    (response) => {
      compState.users = response.data.users.items
    },

    // fail
    null,

    // finally
    () => {
      loadingContent.value = false
    }
  )
}

/**
 *
 * Calls
 *
 */
loadPageContent()
</script>

<style lang="scss" scoped></style>

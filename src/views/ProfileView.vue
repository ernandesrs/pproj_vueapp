<template>
  <main-view-base
    page-icon="person-circle"
    page-title="Profile"
    page-subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    :loading-content="loadingContent"
  >
    <content-card class="col-span-12 md:col-span-5 xl:col-span-4">
      <card-section first title="Avatar" subtitle="Your profile avatar">
        <template #content>
          <div class="flex justify-center items-center p-5">
            <thumbnail-elem
              avatar
              :alternative-text="form.data?.first_name"
              :url="form.data?.avatar_url"
            />
          </div>
        </template>
      </card-section>
      <separator-elem />
      <card-section last title="Details" subtitle="Your profile details">
        <template #content>
          <simple-list
            class="text-sm"
            bordered
            :items="[
              {
                prependText: 'Cargo',
                text: '...'
              },
              {
                prependText: 'Registrado em',
                text: new Date(form.data?.created_at).toLocaleString('pt-BR')
              },
              {
                prependText: 'Verificado em',
                text: new Date(form.data?.email_verified_at).toLocaleString('pt-BR')
              }
            ]"
          />
        </template>
      </card-section>
    </content-card>

    <content-card class="col-span-12 md:col-span-7 xl:col-span-8">
      <card-section title="Basic data" subtitle="Your profile basic data">
        <template #content>
          <base-form
            button-submit-text="Atualizar dados"
            :validation-schema="form.validationSchema"
            method="put"
            action="/me"
            :on-success="submitWithSuccess"
          >
            <div class="grid grid-cols-12 gap-6">
              <field-form
                v-model="form.data.first_name"
                type="text"
                label="Nome"
                name="first_name"
                class="col-span-12 sm:col-span-6"
              />

              <field-form
                v-model="form.data.last_name"
                type="text"
                label="Sobrenome"
                name="last_name"
                class="col-span-12 sm:col-span-6"
              />

              <field-form
                v-model="form.data.username"
                type="text"
                label="Usuário"
                name="username"
                class="col-span-12 sm:col-span-6"
              />

              <field-form
                v-model="form.data.gender"
                type="select"
                label="Gênero"
                name="gender"
                :options="[
                  {
                    value: 'f',
                    label: 'Feminino'
                  },
                  {
                    value: 'm',
                    label: 'Masculino'
                  }
                ]"
                class="col-span-12 sm:col-span-6"
              />

              <field-form
                v-model="form.data.email"
                type="email"
                label="E-mail"
                name="email"
                class="col-span-12 pointer-events-none"
                disabled
              />

              <field-form
                v-model="form.data.password"
                type="password"
                label="Senha"
                name="password"
                class="col-span-12 sm:col-span-6"
              />

              <field-form
                v-model="form.data.password_confirmation"
                type="password"
                label="Confirmar senha"
                name="password_confirmation"
                class="col-span-12 sm:col-span-6"
              />
            </div>
          </base-form>
        </template>
      </card-section>
    </content-card>
  </main-view-base>
</template>

<script setup>
import ContentCard from '@/components/card/ContentCard.vue'
import CardSection from '@/components/card/CardSection.vue'
import ThumbnailElem from '@/components/ThumbnailElem.vue'
import SeparatorElem from '@/components/SeparatorElem.vue'
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import BaseForm from '@/components/form/BaseForm.vue'
import FieldForm from '@/components/form/FieldForm.vue'
import { reactive, ref } from 'vue'
import { yup } from '@/core/plugins/validators'
import { useAlertStore } from '@/stores/alert'
import { apiRequester } from '@/core/plugins/requester'
import SimpleList from '@/components/list/SimpleList.vue'

const alertStore = useAlertStore()

const form = reactive({
  data: {},
  validationSchema: yup.object({
    first_name: yup.string().required().max(25),
    last_name: yup.string().required().max(75),
    username: yup.string().required().max(25),
    gender: yup.mixed().inArray(['f', 'm']),
    password: yup.string().nullable(),
    password_confirmation: yup.string().nullable()
  })
})

const loadingContent = ref(true)

/**
 *
 * Methods
 *
 */

const loadProfileData = () => {
  loadingContent.value = true

  apiRequester(
    // config
    {
      url: '/me',
      method: 'get'
    },

    // success
    (r) => {
      form.data = r.data?.me
    },

    // fail
    null,

    // finally
    () => {
      loadingContent.value = false
    }
  )
}

const submitWithSuccess = (resp) => {
  form.data = resp.data?.me

  alertStore.add('Perfil atualizado com sucesso!', null, 'success', 3000)
}

loadProfileData()
</script>

<template>
  <main-view-base
    page-icon="input-cursor-text"
    page-title="Forms"
    page-subtitle="Veja exemplos de formulários"
    :loading-content="loadingContent"
  >
    <card-section bordered title="Form" subtitle="Lorem dolor" class="col-span-12 sm:col-span-6">
      <template #content>
        <div class="py-3">
          <base-form :on-submit="submitPromise" :on-clear="clearPromise">
            <div class="grid grid-cols-12 gap-5">
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="form.name"
                type="text"
                label="Nome"
                name="f_name"
              />
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="form.email"
                type="email"
                label="E-mail"
                name="f_email"
              />
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="form.age"
                type="number"
                label="Idade"
                name="f_age"
              />
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="form.gender"
                type="select"
                label="Gênero"
                name="f_gender"
                :options="[
                  {
                    label: 'Masculino',
                    value: 'm'
                  },
                  {
                    label: 'Faminino',
                    value: 'f'
                  }
                ]"
              />
              <field-form
                class="col-span-12"
                v-model="form.avatar"
                type="file"
                label="Avatar"
                name="f_avatar"
              />
              <div class="col-span-12 mb-3 bg-zinc-100 border p-4">
                <pre>
                  {{ form }}
                </pre>
              </div>
            </div>
          </base-form>
        </div>
      </template>
    </card-section>

    <card-section
      bordered
      title="With validations"
      subtitle="Lorem dolor"
      class="col-span-12 sm:col-span-6"
    >
      <template #content>
        <div class="py-3">
          <base-form
            :on-submit="submitPromise"
            :on-clear="clearPromise"
            :validation-schema="validatedFormSchema"
          >
            <div class="grid grid-cols-12 gap-5">
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="validatedForm.name"
                type="text"
                label="Nome"
                name="name"
              />
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="validatedForm.email"
                type="email"
                label="E-mail"
                name="email"
              />
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="validatedForm.age"
                type="number"
                label="Idade"
                name="age"
              />
              <field-form
                class="col-span-12 sm:col-span-6"
                v-model="validatedForm.gender"
                type="select"
                label="Gênero"
                name="gender"
                :options="[
                  {
                    label: 'Masculino',
                    value: 'm'
                  },
                  {
                    label: 'Faminino',
                    value: 'f'
                  },
                  {
                    label: 'Invalid #1',
                    value: 'inv1'
                  },
                  {
                    label: 'Invalid #2',
                    value: 'inv2'
                  }
                ]"
              />
              <field-form
                class="col-span-12"
                v-model="validatedForm.avatar"
                type="file"
                label="Avatar"
                name="avatar"
              />
              <div class="col-span-12 mb-3 bg-zinc-100 border p-4">
                <pre>
                  {{ validatedForm }}
                </pre>
              </div>
            </div>
          </base-form>
        </div>
      </template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import CardSection from '@/components/card/CardSection.vue'
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import FieldForm from '@/components/form/FieldForm.vue'
import BaseForm from '@/components/form/BaseForm.vue'
import { useAppStore } from '@/stores/app'
import { reactive, ref } from 'vue'
import { yup } from '@/core/plugins/validators'

const appStore = useAppStore()

const loadingContent = ref(true)

const form = reactive({
  name: null,
  email: null,
  age: null,
  gender: null,
  avatar: null
})

const validatedForm = reactive({
  name: null,
  email: null,
  age: null,
  gender: null,
  avatar: null
})

const validatedFormSchema = yup.object({
  name: yup.string().required().min(2).max(10),
  email: yup.string().required().email(),
  age: yup.number().required().min(10).max(100),
  gender: yup.mixed().required().inArray(['m', 'f']),
  avatar: yup
    .mixed()
    .nullable()
    .allowedTypes(['jpg', 'jpeg', 'png'])
    .minFileSize(0.05)
    .maxFileSize(1)
})

/**
 *
 * Calls
 *
 */
appStore.updatePageTitle('Form fields')

const submitPromise = (data) => {
  console.log(data)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

const clearPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      validatedForm.name = form.name = null
      validatedForm.email = form.email = null
      validatedForm.age = form.age = null
      validatedForm.gender = form.gender = null
      validatedForm.avatar = form.avatar = null
      resolve()
    }, 1000)
  })
}

setTimeout(() => {
  loadingContent.value = false
}, 100)
</script>

<style lang="css" scoped></style>

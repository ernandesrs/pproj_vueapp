<template>
  <main-view-base
    page-icon="input-cursor-text"
    page-title="Form fields"
    page-subtitle="Veja exemplos de campos de formulário"
    :loading-content="loadingContent"
  >
    <card-section
      bordered
      title="Fields"
      subtitle="Fields types: text, number, password, date, file"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
      <!--  -->
      <template #content>
        <div class="flex flex-col gap-y-4 py-4">
          <field-form name="text_field" v-model="fields.text" label="Text type" type="text" />

          <field-form
            name="number_field"
            v-model="fields.number"
            label="Number type"
            type="number"
          />

          <field-form
            name="password_field"
            v-model="fields.password"
            label="Password type"
            type="password"
          />

          <field-form name="date_field" v-model="fields.date" label="Date type" type="date" />

          <field-form name="file_field" v-model="fields.file" label="File type" type="file" />
        </div>
      </template>
    </card-section>

    <card-section
      bordered
      title="More fields"
      subtitle="Types: select"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
      <!--  -->
      <template #content>
        <field-form
          name="select_field"
          v-model="fields.select"
          label="Select type"
          type="select"
          :options="[
            {
              label: 'Option #1',
              value: 'op1'
            },
            {
              label: 'Option #2',
              value: 'op2'
            },
            {
              label: 'Option #3',
              value: 'op3'
            },
            {
              label: 'Option #4',
              value: 'op4'
            }
          ]"
        />
      </template>
    </card-section>

    <card-section
      bordered
      title="With feedback"
      subtitle="Lorem dolor input field text"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
      <template #content>
        <div class="flex flex-col gap-y-4 py-4">
          <field-form
            name="field_text_feedback"
            v-model="fields.text"
            label="Default feedback"
            :feedback="fields.errors.with_feedback"
          />

          <field-form
            name="field_text_success_feedback"
            v-model="fields.text"
            label="Success feedback"
            :success-feedback="fields.errors.with_feedback"
          />

          <field-form
            name="field_text_fail_feedback"
            v-model="fields.text"
            label="Fail feedback"
            :fail-feedback="fields.errors.with_feedback"
          />
        </div>
      </template>
    </card-section>

    <card-section
      bordered
      title="With validation"
      subtitle="Lorem dolor input field text"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
    >
    </card-section>
  </main-view-base>
</template>

<script setup>
import CardSection from '@/components/card/CardSection.vue'
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import FieldForm from '@/components/form/FieldForm.vue'
import { useAppStore } from '@/stores/app'
import { reactive, ref } from 'vue'

const appStore = useAppStore()

const loadingContent = ref(true)

const fields = reactive({
  text: null,
  password: null,
  date: null,
  number: null,
  file: null,
  select: null,

  errors: {
    text: null,
    with_feedback: 'A feedback text here'
  }
})

/**
 *
 * Calls
 *
 */
appStore.updatePageTitle('Form fields')

setTimeout(() => {
  loadingContent.value = false
}, 100)
</script>

<style lang="css" scoped></style>

<template>
  <div class="w-full max-w-[475px] shadow border rounded-lg p-6 bg-white">
    <auth-header title="Login" subtitle="Acesse sua conta agora mesmo" />

    <base-form
      :validation-schema="loginSchema"
      :on-submit="onSubmitLoginForm"
      :on-validation-fail="onValidationFail"
      button-submit-text="Login"
      button-clear-text=""
    >
      <div class="grid grid-cols-12 gap-y-6">
        <field-form name="email" type="email" label="E-mail" class="col-span-12" />
        <field-form name="password" type="password" label="Senha" class="col-span-12" />
      </div>
    </base-form>
  </div>
</template>

<script setup>
import BaseForm from '@/components/form/BaseForm.vue'
import FieldForm from '@/components/form/FieldForm.vue'
import AuthHeader from '@/components/layouts/auth/AuthHeader.vue'
import { apiRequester } from '@/core/plugins/requester'
import { yup } from '@/core/plugins/validators'
import { useAlertStore } from '@/stores/alert'

const useAlert = useAlertStore()

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const onSubmitLoginForm = (validatedData) => {
  console.log(validatedData)
}

const onValidationFail = (errors) => {
  if (!errors.count) {
    return
  }

  useAlert.add('Cheque os dados de login e tente de novo.', 'Dados inválidos', 'danger', 5000)
}

apiRequester.get('/test').then((response) => {
  console.log('test:', response)
})

apiRequester.get('/admin/test').then((response) => {
  console.log('admin test:', response)
})
</script>

<style lang="css" scoped></style>

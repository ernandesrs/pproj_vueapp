<template>
  <div class="w-full max-w-[475px] shadow border rounded-lg p-6 bg-white">
    <auth-header title="Login" subtitle="Acesse sua conta agora mesmo" />

    <base-form
      method="post"
      :validation-schema="loginSchema"
      v-on:form-validation-submit="onValidationFail"
      v-on:form-submit="onSubmitLoginForm"
      button-submit-text="Login"
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
import { yup } from '@/core/plugins/validators'
import { useAlertStore } from '@/stores/alert'
import { useUserStore } from '@/stores/user'

const alertStore = useAlertStore()

const userStore = useUserStore()

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const onSubmitLoginForm = async (validatedData) => {
  return await userStore.login(validatedData.email, validatedData.password, false)
}

const onValidationFail = (errors) => {
  if (!errors.count) {
    return
  }

  alertStore.add('Cheque os dados de login e tente de novo.', 'Dados inválidos', 'danger', 5000)
}
</script>

<style lang="css" scoped></style>

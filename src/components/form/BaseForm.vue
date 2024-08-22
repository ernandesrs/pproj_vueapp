<template>
  <form v-on:submit.prevent="formSubmit">
    <div class="w-full mb-5">
      <slot />
    </div>

    <div class="flex justify-center items-center gap-5 py-2">
      <button-elem
        v-if="props.buttonClearText?.length"
        v-on:click="onFormClear"
        type="button"
        prepend-icon="check-lg"
        :text="props.buttonClearText"
        variant="outlined"
        :disabled="compState.submitting"
        :loading="compState.clearing"
      />
      <button-elem
        type="submit"
        prepend-icon="check-lg"
        :text="props.buttonSubmitText"
        :disabled="compState.clearing"
        :loading="compState.submitting"
      />
    </div>
  </form>
</template>

<script setup>
import ButtonElem from '../ButtonElem.vue'
import { reactive, watch } from 'vue'
import { useForm } from 'vee-validate'
import { useAlertStore } from '@/stores/alert'
import { apiReq } from '@/core/plugins/requester'
import { getServerMessage } from '@/core/server-messages'

const emit = defineEmits(['formSubmit', 'formClear', 'formValidationFail'])

const props = defineProps({
  /**
   * Text to clear button. Hidde when null
   */
  buttonClearText: {
    type: String,
    default: null
  },

  /**
   * Text to submit button.
   */
  buttonSubmitText: {
    type: String,
    default: 'Submeter'
  },

  /**
   * Submiting form
   */
  submitting: {
    type: Boolean,
    default: false
  },

  /**
   * Function(Optionally) to handle with form validation fails
   */
  onValidationFail: {
    type: Function,
    default: null
  },

  /**
   * Validator schema
   */
  validationSchema: {
    type: Object,
    default: () => {}
  },

  /**
   * Method: get, post, put, patch, delete
   * Default is 'get'
   */
  method: {
    type: String,
    default: null,
    required: false
  },

  /**
   * Action url
   */
  action: {
    type: String,
    default: null,
    required: false
  },

  /**
   * A function to handle with request success
   */
  onSuccess: {
    type: Function,
    default: null,
    required: false
  },

  /**
   * A function to handle with request fail
   */
  onFail: {
    type: Function,
    default: null
  },

  /**
   * Function(Optionally, returning a Promosise) to handle form cleanup.
   */
  onClear: {
    type: Function,
    default: null
  },

  /**
   * Function to handle on request is end
   */
  onFinally: {
    type: Function,
    default: null
  }
})

const compState = reactive({
  submitting: false,
  clearing: false
})

const alertStore = useAlertStore()

// const { handleSubmit, errors } = useForm({
const { handleSubmit, setErrors } = useForm({
  validationSchema: props.validationSchema
})

/**
 *
 * Methods
 *
 */

const formSubmit = handleSubmit(
  // submit
  (values) => {
    emit('formSubmit', values)

    if (!props?.action || !props?.method) {
      // needs a value to action and method prop
      return
    }

    compState.submitting = true

    apiReq({
      method: props?.method,
      url: props?.action,
      data: values ?? null
    })
      .then((resp) => {
        if (props.onSuccess) {
          props.onSuccess(resp)
        }
      })
      .catch((resp) => {
        const errors = resp.response.data?.errors
        const error = resp.response.data?.error

        if (errors) {
          setErrors(errors)
        }

        if (error) {
          alertStore.add(getServerMessage(error), null, 'danger', 5000)
        }

        if (props?.onFail) {
          props?.onFail(resp)
        }
      })
      .finally(() => {
        compState.submitting = false

        if (props?.onFinally) {
          props?.onFinally()
        }
      })
  },

  // error
  (errors) => {
    const errorsData = {
      errors: errors.errors,
      count: Object.values(errors.errors).length > 0
    }

    if (errorsData.count) {
      onFormValidationFail(errorsData)
    }
  }
)

const onFormClear = () => {
  emit('formClear')

  compState.clearing = true

  if (props.onClear) {
    const promise = props.onClear()

    try {
      promise.finally(() => {
        compState.clearing = false
      })
    } catch {
      compState.clearing = false
    }
  }
}

const onFormValidationFail = (errors) => {
  emit('formValidationFail')

  if (props.onValidationFail) {
    props.onValidationFail(errors)
  } else {
    alertStore.add('Um ou mais dados informados são inválidos.', null, 'fail', 5000)
  }
}

/**
 *
 * Watchs
 *
 */
watch(
  () => props.submitting,
  (n) => {
    compState.submitting = n
  },
  { immediate: true }
)
</script>

<style lang="css" scoped></style>

<template>
  <form v-on:submit.prevent="onFormSubmit">
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

const emit = defineEmits(['form:submit', 'form:clear'])

const props = defineProps({
  /**
   * Text to clear button. Hidde when null
   */
  buttonClearText: {
    type: String,
    default: 'Limpar'
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
   * Function(Ideally returning a Promosise) to handle form submission.
   */
  onSubmit: {
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
   * Validators
   */
  validationSchema: {
    type: Object,
    default: () => {}
  }
})

const compState = reactive({
  submitting: false,
  clearing: false
})

// const { handleSubmit, errors } = useForm({
const { handleSubmit } = useForm({
  validationSchema: props.validationSchema
})

/**
 *
 * Methods
 *
 */
// const onFormSubmit = () => {
//   compState.submitting = true

//   emit('form:submit')

//   if (props.onSubmit) {
//     const promise = props.onSubmit()

//     try {
//       promise.finally(() => {
//         compState.submitting = false
//       })
//     } catch {
//       compState.submitting = false
//     }
//   }
// }

const onFormSubmit = handleSubmit((values) => {
  compState.submitting = true

  emit('form:submit', { data: values })

  if (props.onSubmit) {
    const promise = props.onSubmit({ data: values })

    try {
      promise.finally(() => {
        compState.submitting = false
      })
    } catch {
      compState.submitting = false
    }
  }
})

const onFormClear = () => {
  compState.clearing = true

  emit('form:clear')

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

<template>
  <div class="flex flex-col">
    <!-- label -->
    <label
      v-if="props?.label"
      :for="compState.elemId"
      class="text-zinc-400 dark:text-zinc-400 duration-200 ease-in-out mb-1 text-base font-normal"
      :class="{
        '': compState.focused || !compState.empty,
        '!text-rose-600 dark:!text-rose-700': hasFailFeedback,
        '!text-emerald-600 dark:!text-emerald-700': hasSuccessFeedback
      }"
    >
      <span class="inline">{{ props?.label }}:</span>
    </label>
    <!-- /label -->

    <div
      class="flex flex-col justify-center w-full h-11 border bg-zinc-50 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-200 dark:border-zinc-800 relative rounded-lg overflow-hidden shadow-sm duration-150"
      :class="{
        '!shadow !bg-white dark:!bg-zinc-900': compState.focused,
        '!border-rose-400 !text-rose-500 dark:!border-rose-600': hasFailFeedback,
        '!border-emerald-400 !text-emerald-500 dark:!border-emerald-600': hasSuccessFeedback
      }"
    >
      <!-- custom input file -->
      <div
        v-if="props.type == 'file'"
        class="flex items-center w-full h-full absolute top-0 left-0 pointer-events-none p-1 rounded-lg"
      >
        <span class="flex items-center h-full bg-zinc-200 px-4 rounded-tl-lg rounded-bl-lg"
          >Escolher</span
        >
        <span
          class="flex items-center h-full flex-1 text-center truncate px-4"
          v-text="getFileName"
        ></span>
      </div>

      <input
        v-if="props.type == 'file'"
        type="file"
        v-on:change="inputFileChange"
        :id="compState.elemId"
        :name="compState.elemId"
        class="opacity-0"
      />
      <!-- /custom input file -->

      <!-- input text, file, number, password, date,email -->
      <input
        v-if="['text', 'number', 'password', 'date', 'email'].includes(props.type)"
        :type="
          props.type == 'password' ? (compState.passwordShow ? 'text' : 'password') : props.type
        "
        v-model="fieldValue"
        v-on:focusin="compState.focused = true"
        v-on:focusout="compState.focused = false"
        class="w-full h-full px-4 rounded-lg bg-transparent outline-none"
        :id="compState.elemId"
        :name="compState.elemId"
      />
      <!-- /input text, file, number, password, date,email -->

      <!-- input select -->
      <select
        v-if="props.type == 'select'"
        v-model="fieldValue"
        :id="compState.elemId"
        :name="compState.elemId"
        class="w-full h-full px-4 rounded-lg bg-transparent outline-none"
      >
        <option :selected="compState.value == null ? true : false" disabled>Escolha</option>
        <option
          v-for="(i, k) in props.options ?? []"
          :key="k"
          v-text="i.label"
          :value="i.value"
          :selected="compState.value == i.value"
        ></option>
      </select>
      <!-- /input select -->

      <!-- passsword show/hide -->
      <icon-elem
        v-if="props.type == 'password'"
        v-on:click="compState.passwordShow = !compState.passwordShow"
        :name="compState.passwordShow ? 'eye-slash-fill' : 'eye-fill'"
        class="absolute right-0 px-3 h-full flex items-center bg-zinc-50 dark:bg-zinc-700"
        role="button"
      />

      <!-- file input clear -->
      <icon-elem
        v-if="showFileInputClear"
        v-on:click="compState.value = null"
        name="x-lg"
        class="bg-zinc-50 dark:bg-zinc-900 absolute right-0 px-3 h-full flex items-center text-rose-500 hover:text-rose-800 duration-75"
        role="button"
      />
    </div>

    <Transition
      enter-active-class="duration-200 ease-in-out"
      leave-active-class="duration-100 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <feedback-form v-show="getFeedback" :type="getFeedbackType" :text="getFeedback" />
    </Transition>
  </div>
</template>

<script setup>
import FeedbackForm from './FeedbackForm.vue'
import IconElem from '../IconElem.vue'
import { computed, reactive, watch } from 'vue'
import { useField } from 'vee-validate'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  /**
   *
   * Model value
   *
   */
  modelValue: {
    default: null
  },

  /**
   *
   * Element ID. When null, one will be generated automatically.
   *
   */
  name: {
    type: [Number, String, null],
    default: null,
    required: true
  },

  /**
   *
   * Field type. Allows: text, number, date, password, file, select
   */
  type: {
    type: String,
    default: 'text'
  },

  /**
   *
   * Field label
   *
   */
  label: {
    type: [String, null],
    default: null
  },

  /**
   *
   * Options. Required when the field type is 'select'.
   * Example:
   * [
   *     {
   *         label: 'Option #1',
   *         value: 'op1'
   *     },
   *     {
   *         label: 'Option #2',
   *         value: 'op2'
   *     }
   * ]
   *
   */
  options: {
    type: Array,
    default: null
  },

  rules: {
    type: [Object, String],
    default: () => {}
  },

  /**
   *
   * Field feedback
   *
   */
  feedback: {
    type: String,
    default: null
  },

  /**
   *
   * Field success feedback
   *
   */
  successFeedback: {
    type: String,
    default: null
  },

  /**
   *
   * Field fail feedback
   *
   */
  failFeedback: {
    type: String,
    default: null
  }
})

const compState = reactive({
  elemId: null,
  focused: null,
  empty: true,
  passwordShow: false,
  value: null
})

const { value: fieldValue, errorMessage } = useField(props.name, props.rules)

/**
 *
 * Methods
 *
 */

const inputFileChange = (event) => {
  compState.value = event.target.files[0]
}

/**
 *
 * Computeds
 *
 */
const hasDefaultFeedback = computed(() => {
  return props.feedback?.length > 0
})

const hasSuccessFeedback = computed(() => {
  return props.successFeedback?.length > 0
})

const hasFailFeedback = computed(() => {
  return getErrorsFromVeeValidate.value || props.failFeedback?.length > 0
})

const getFeedback = computed(() => {
  if (getErrorsFromVeeValidate.value) {
    return getErrorsFromVeeValidate.value
  }

  return props.feedback || props.successFeedback || props.failFeedback
})

const getFeedbackType = computed(() => {
  if (getErrorsFromVeeValidate.value) {
    return 'fail'
  }

  return hasDefaultFeedback.value
    ? 'default'
    : hasSuccessFeedback.value
      ? 'success'
      : hasFailFeedback.value
        ? 'fail'
        : 'default'
})

const showFileInputClear = computed(() => {
  return props.type == 'file' && compState.value != null
})

const getFileName = computed(() => {
  return compState?.value
    ? typeof compState?.value == 'object'
      ? compState?.value.name
      : 'Nada selecionado'
    : 'Nada selecionado'
})

const getErrorsFromVeeValidate = computed(() => errorMessage.value)

/**
 *
 * Watchs
 */

watch(
  () => props.modelValue,
  (n) => {
    compState.value = n

    if (n != null && n?.length) {
      compState.empty = false
    } else {
      compState.empty = true
    }
  },
  {
    immediate: true,
    deep: true
  }
)

watch(
  () => compState.value,
  (n) => {
    emit('update:modelValue', n)
  },
  { deep: true }
)

watch(
  () => fieldValue,
  (n) => {
    compState.value = n
  },
  { immediate: true, deep: true }
)

/**
 *
 * Calls
 *
 */

compState.elemId = 'form_field_' + props.type + '_' + props.name
</script>

<style lang="css" scoped></style>

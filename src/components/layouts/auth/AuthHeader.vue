<template>
  <div class="flex flex-col justify-center items-center text-center mb-6">
    <img class="w-[50px] sm:w-[75px] mb-3" src="@/assets/logo.svg" alt="Logo" />
    <h1
      v-if="props.title?.length"
      v-text="props.title"
      class="text-zinc-500 font-semibold mb-2 text-2xl md:text-3xl"
    ></h1>
    <div
      v-if="props.subtitle?.length"
      v-text="props.subtitle"
      class="text-zinc-400 font-normal md:font-medium text-lg md:text-xl"
    ></div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  }
})

const appStore = useAppStore()

appStore.updatePageTitle(props.title)
</script>

<style lang="css" scoped></style>

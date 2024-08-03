<template>
  <router-link
    v-bind:to="link?.to ?? {}"
    :title="link?.title ?? link?.label"
    class="flex items-center gap-2 py-3 px-6 text-zinc-300 bg-zinc-900 hover:bg-purple-950 duration-300 ease-in-out rounded-lg mb-1"
    :class="{
      'bg-gradient-to-tr from-purple-950 to-purple-900 !gap-4': (link?.activeIn ?? []).includes(
        route.name
      ),
      'justify-center': props.miniOn
    }"
  >
    <icon-elem :name="link?.icon" />
    <span v-show="!props.miniOn" class="inline truncate" v-html="link?.label"></span>
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import IconElem from '@/components/IconElem.vue'

const props = defineProps({
  miniOn: {
    type: Boolean,
    default: false
  },
  link: {
    type: Object,
    default: null
  }
})

const route = useRoute()
</script>

<style lang="css" scoped></style>

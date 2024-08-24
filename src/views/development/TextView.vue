<template>
  <main-view-base
    page-title="Title, paragraphs, ..."
    page-subtitle="All text components"
    page-icon="file-earmark-text"
    :loading-content="loadingContent"
  >
    <card-section bordered title="Titles" subtitle="All title options" class="col-span-12">
      <template #content>
        <h1-elem
          text="H1 lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nihil debitis fugiat?"
        />
        <h2-elem
          text="H2 lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nihil debitis fugiat?"
        />
        <h3-elem
          text="H3 lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nihil debitis fugiat?"
        />
        <h4-elem
          text="H4 lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nihil debitis fugiat?"
        />
      </template>
    </card-section>
    <card-section
      bordered
      title="Texts"
      subtitle="All texts options"
      class="col-span-12 sm:col-span-6"
    >
      <template #content>
        <h4-elem text="Paragraph" />
        <p-elem
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere tenetur blanditiis veritatis quisquam assumenda sint error maiores, expedita odit praesentium repellendus aut inventore placeat magni necessitatibus nisi dolorem ab?"
        />
        <h4-elem text="Quoted paragraph" />
        <p-elem
          quoted
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere tenetur blanditiis veritatis quisquam assumenda sint error maiores, expedita odit praesentium repellendus aut inventore placeat magni necessitatibus nisi dolorem ab?"
        />
        <h4-elem text="Unselectable paragraph" />
        <p-elem
          unselectable
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere tenetur blanditiis veritatis quisquam assumenda sint error maiores, expedita odit praesentium repellendus aut inventore placeat magni necessitatibus nisi dolorem ab?"
        />
        <h4-elem text="Code" />
        <p-elem code text='<p-elem quoted text="Lorem dolor text" />' />
      </template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import CardSection from '@/components/card/CardSection.vue'
import H1Elem from '@/components/text/H1Elem.vue'
import H2Elem from '@/components/text/H2Elem.vue'
import H3Elem from '@/components/text/H3Elem.vue'
import H4Elem from '@/components/text/H4Elem.vue'
import PElem from '@/components/text/TextElem.vue'

import { ref } from 'vue'

const loadingContent = ref(true)

setTimeout(() => {
  loadingContent.value = false
}, 250)
</script>

<style lang="css" scoped></style>

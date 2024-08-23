<template>
  <main-view-base page-icon="list" page-title="Lists" page-subtitle="All list options examples">
    <card-section
      bordered
      shadow
      title="Simple list"
      subtitle="Example of a simple list"
      class="col-span-12 sm:col-span-6 lg:col-span-4"
    >
      <template #content>
        <simple-list
          :items="[
            {
              text: 'Text to item #1'
            },
            {
              text: 'Text to item #2'
            },
            {
              text: 'Text to item #3'
            }
          ]"
        />
      </template>
    </card-section>
    <card-section
      bordered
      shadow
      title="Simple list with border"
      subtitle="Example of a simple list with bottom border on each item"
      class="col-span-12 sm:col-span-6 lg:col-span-4"
    >
      <template #content>
        <simple-list
          :items="[
            {
              text: 'Text to item #1'
            },
            {
              text: 'Text to item #2'
            },
            {
              text: 'Text to item #3'
            }
          ]"
          bordered
        />
      </template>
    </card-section>
    <card-section
      bordered
      shadow
      title="Simple list with prepend text"
      subtitle="Example of a simple list with prepent text"
      class="col-span-12 sm:col-span-6 lg:col-span-4"
    >
      <template #content>
        <simple-list
          :items="[
            {
              prependText: 'Item #1',
              text: 'Text to item 1'
            },
            {
              prependText: 'Item #2',
              text: 'Text to item 2'
            },
            {
              prependText: 'Item #3',
              text: 'Text to item 3'
            }
          ]"
          bordered
        />
      </template>
    </card-section>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import CardSection from '@/components/card/CardSection.vue'
import SimpleList from '@/components/list/SimpleList.vue'
</script>

<style lang="css" scoped></style>

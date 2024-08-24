<template>
  <main-view-base page-icon="list" page-title="Lists" hidde-header>
    <content-card
      no-shadow
      icon="list"
      title="Simple lists"
      subtitle="All simple list options examples"
      class="col-span-12"
    >
      <div class="grid grid-cols-12 gap-6">
        <card-section
          bordered
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
      </div>
    </content-card>

    <content-card
      no-shadow
      icon="list"
      title="Menu list"
      subtitle="All list options examples"
      class="col-span-12"
    >
      <div class="grid grid-cols-12 gap-6">
        <card-section
          bordered
          title="Menu list default"
          subtitle="A example with text, prepend icon and append icon"
          class="col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <template #content>
            <menu-list :items="listItems">
              <template v-slot="{ itemValue }">
                <menu-item
                  prepend-icon="arrow-left"
                  append-icon="arrow-right"
                  :text="itemValue.text"
                />
              </template>
            </menu-list>
          </template>
        </card-section>
      </div>
    </content-card>
  </main-view-base>
</template>

<script setup>
import MainViewBase from '@/components/layouts/main/MainViewBase.vue'
import ContentCard from '@/components/card/ContentCard.vue'
import CardSection from '@/components/card/CardSection.vue'
import SimpleList from '@/components/list/SimpleList.vue'
import MenuList from '@/components/list/MenuList.vue'
import MenuItem from '@/components/list/MenuItem.vue'

const listItems = [
  {
    text: 'Item #1',
    caption: 'Item 1 caption'
  },
  {
    text: 'Item #2',
    caption: 'Item 2 caption'
  },
  {
    text: 'Item #3',
    caption: 'Item 3 caption'
  }
]
</script>

<style lang="css" scoped></style>

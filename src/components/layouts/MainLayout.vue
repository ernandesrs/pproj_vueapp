<template>
  <div class="w-full h-screen flex bg-zinc-100">
    <!-- menu toggler -->
    <sidebar-toggler
      v-if="appStore.stateData.inMobile && sidebar.show"
      v-on:click="sidebarToggle"
      :showing="sidebar.show"
      class="fixed z-50 top-6 right-6 shadow-none bg-zinc-950 text-zinc-50"
    />
    <!-- /menu toggler -->

    <!-- sidebar backdrop -->
    <div
      v-show="appStore.stateData.inMobile && sidebar.show"
      class="w-full h-screen fixed z-30 bg-zinc-900 bg-opacity-75"
    ></div>
    <!-- /sidebar backdrop -->

    <main-sidebar :show="sidebar.show" :mini-on="sidebar.miniOn" />

    <!-- header/main -->
    <section class="flex-1 flex flex-col py-6 overflow-hidden">
      <!-- header -->
      <header class="w-full h-[65px] px-6 rounded-lg mb-3">
        <div class="w-full h-full rounded-lg flex items-center gap-x-5">
          <!-- menu toggler -->
          <sidebar-toggler v-on:click="sidebarToggle" :showing="sidebar.miniOn" />
          <!-- /menu toggler -->

          <!-- logo -->
          <router-link
            :to="{ name: 'home' }"
            class="flex gap-x-2 items-center text-xl font-bold text-zinc-700"
          >
            <img class="w-7 h-7" src="@/assets/logo.svg" alt="Vue App" />
            <span>VUEAPP</span>
          </router-link>
          <!-- /logo -->

          <div class="flex-1 flex">
            <dropdown-elem class="ml-auto" location="right">
              <template #activator>
                <router-link
                  :to="{ name: 'profile' }"
                  class="flex items-center gap-x-2 shadow py-2 px-4 rounded-lg bg-zinc-50"
                >
                  <icon-elem name="person-circle" class="text-xl" />
                  <span class="inline">Username</span>
                </router-link>
              </template>

              <template #content>
                <div class="w-[275px] bg-white shadow-lg p-5 rounded-lg">Dropdown content</div>
              </template>
            </dropdown-elem>
          </div>
        </div>
      </header>
      <!-- /header -->

      <!-- main -->
      <main class="w-full flex-1 overflow-y-auto px-6 flex flex-col">
        <div class="flex-1 rounded-lg pb-3">
          <router-view />
        </div>
      </main>
      <!-- /main -->
    </section>
    <!-- /header/main -->
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { reactive, watch } from 'vue'
import MainSidebar from '@/components/layouts/main/MainSidebar.vue'
import SidebarToggler from '@/components/layouts/SidebarToggler.vue'
import { RouterLink } from 'vue-router'
import IconElem from '../IconElem.vue'
import DropdownElem from '../DropdownElem.vue'

const appStore = useAppStore()

const sidebar = reactive({
  show: false,
  miniOn: false
})

/**
 *
 * Methods
 *
 */
const sidebarToggle = () => {
  if (appStore.stateData.inMobile) {
    sidebar.show = !sidebar.show
  } else {
    if (!sidebar.show) {
      sidebar.show = true
    }

    sidebar.miniOn = !sidebar.miniOn
  }
}

/**
 *
 * Watchs
 *
 */

// Mobile/Desktop change
watch(
  () => appStore.stateData.inMobile,
  (n) => {
    if (n) {
      sidebar.miniOn = false
      sidebar.show = false
    } else {
      sidebar.show = true
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="css" scoped>
.sidebar-enter-active {
  @apply duration-300 ease-in-out;
}

.sidebar-leave-active {
  @apply duration-100 ease-in;
}

.sidebar-enter-from,
.sidebar-leave-to {
  @apply w-12 -translate-x-1/3;
}
</style>

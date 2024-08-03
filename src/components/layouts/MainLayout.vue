<template>
  <div class="w-full h-screen flex bg-zinc-100">
    <!-- sidebar toggler -->
    <button
      v-show="appStore.stateData.inMobile && sidebar.show"
      v-on:click="sidebarToggle"
      class="bg-zinc-100 py-2 px-4 border rounded-lg shadow fixed z-50 right-6 top-6"
    >
      X
    </button>
    <!-- /sidebar toggler -->

    <!-- sidebar backdrop -->
    <div
      v-show="appStore.stateData.inMobile && sidebar.show"
      class="w-full h-screen fixed z-30 bg-zinc-900 bg-opacity-25"
    ></div>
    <!-- /sidebar backdrop -->

    <MainSidebar :show="sidebar.show" :mini-on="sidebar.miniOn">
      <template v-slot:sidebarContent>
        <!--  -->
      </template>
    </MainSidebar>
    <!-- header/main -->
    <section class="flex-1 flex flex-col py-6 overflow-hidden">
      <!-- header -->
      <header class="w-full h-[65px] px-6 rounded-lg overflow-hidden mb-3">
        <div class="w-full h-full rounded-lg flex gap-x-3 items-center">
          <!-- menu toggler -->
          <button v-on:click="sidebarToggle" class="py-3 px-2 border rounded-lg shadow">
            MENU
          </button>
          <!-- /menu toggler -->

          <!-- logo -->
          <a class="flex gap-x-2 items-center text-xl font-bold text-zinc-700" href="">
            <img class="w-7 h-7" src="@/assets/logo.svg" alt="Vue App" />
            <span>VUEAPP</span>
          </a>
          <!-- /logo -->
        </div>
      </header>
      <!-- /header -->

      <!-- main -->
      <main class="w-full flex-1 overflow-y-auto px-6 flex flex-col">
        <div class="flex-1 rounded-lg p-6 border bg-zinc-50">
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
import MainSidebar from '@/components/layouts/MainSidebar.vue'

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

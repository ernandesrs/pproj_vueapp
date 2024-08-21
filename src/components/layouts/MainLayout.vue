<template>
  <div class="w-full h-screen flex text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900">
    <LoadbarElem v-if="appStore.stateData.requesting" />
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

    <app-alert />

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
            class="flex gap-x-2 items-center text-xl font-bold text-zinc-700 dark:text-zinc-200"
          >
            <img class="w-7 h-7" src="@/assets/logo.svg" :alt="appStore.stateData.appName" />
            <span>{{ appStore.stateData.appName }}</span>
          </router-link>
          <!-- /logo -->

          <div class="flex-1 flex items-center gap-x-4">
            <button-elem
              v-on:click="darkModeToggle"
              :icon="appStore.isDarkTheme ? 'sun-fill' : 'moon-fill'"
              color="dark"
              size="sm"
              variant="filled"
              circle
              class="ml-auto"
            />

            <dropdown-elem location="right">
              <template #activator>
                <router-link
                  :to="{ name: 'profile' }"
                  class="flex items-center gap-x-2 shadow border border-zinc-200 dark:border-zinc-800 py-2 px-3 rounded-lg"
                >
                  <thumbnail-elem
                    avatar
                    :alternative-text="userStore?.getFullName"
                    :url="userStore?.stateData?.user?.avatar_url"
                    size="xs"
                  />
                  <span class="inline" v-text="userStore?.getFullName"></span>
                </router-link>
              </template>

              <template #content>
                <div class="w-[275px] bg-white dark:bg-zinc-800 shadow-lg p-5 rounded-lg">
                  <template v-if="userStore.stateData?.user?.id">
                    <div class="flex flex-col justify-center items-center">
                      <thumbnail-elem
                        size="base"
                        :alternative-text="userStore?.getFullName"
                        :url="userStore?.stateData?.user?.avatar_url"
                        avatar
                      />
                      <div
                        class="text-2xl font-medium truncate mb-1 mt-3 text-zinc-500 dark:text-zinc-200"
                        v-text="userStore.getFullName"
                      ></div>
                      <div
                        class="text-base font-normal truncate text-zinc-400 dark:text-zinc-500"
                        v-text="userStore.stateData.user?.email"
                      ></div>
                    </div>
                    <separator-elem class="my-6" />
                    <div class="flex justify-between items-center">
                      <router-link :to="{ name: 'profile' }" title="Meu perfil">
                        <button-elem
                          type="button"
                          prepend-icon="person-circle"
                          text="Perfil"
                          size="sm"
                        />
                      </router-link>

                      <button-elem
                        v-on:click="logout"
                        prepend-icon="box-arrow-left"
                        text="Logout"
                        size="sm"
                      />
                    </div>
                  </template>
                </div>
              </template>
            </dropdown-elem>
          </div>
        </div>
      </header>
      <!-- /header -->

      <!-- main -->
      <main class="w-full flex-1 overflow-y-auto px-6 flex flex-col z-0">
        <div class="flex-1 rounded-lg pb-3 relative">
          <Transition
            enter-active-class="duration-100 ease-in-out"
            leave-active-class="duration-300 ease-in"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <backdrop-elem v-show="appStore.stateData.loading" spin />
          </Transition>

          <router-view />
        </div>
      </main>
      <!-- /main -->
    </section>
    <!-- /header/main -->
  </div>
</template>

<script setup>
import MainSidebar from '@/components/layouts/main/MainSidebar.vue'
import SidebarToggler from '@/components/layouts/SidebarToggler.vue'
import DropdownElem from '../DropdownElem.vue'
import ButtonElem from '../ButtonElem.vue'
import ThumbnailElem from '@/components/ThumbnailElem.vue'
import AppAlert from '@/components/layouts/AppAlert.vue'
import BackdropElem from '../BackdropElem.vue'
import LoadbarElem from '../LoadbarElem.vue'
import SeparatorElem from '../SeparatorElem.vue'
import { reactive, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'

const appStore = useAppStore()
const userStore = useUserStore()

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

const darkModeToggle = () => {
  appStore.darkModeToggle()
}

const logout = () => {
  userStore.logout()
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

/**
 *
 * Calls
 */
appStore.setTheme()
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

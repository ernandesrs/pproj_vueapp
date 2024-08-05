<template>
  <Transition name="sidebar">
    <aside
      v-show="props.show"
      class="fixed z-40 lg:relative sidebar-width sm:w-full h-full sm:max-w-[325px] pt-6 pb-6 pl-6 duration-300 ease-in-out"
      :class="{
        'sideabar-max-width': props.miniOn
      }"
    >
      <div class="bg-zinc-800 w-full h-full flex flex-col rounded-lg shadow overflow-hidden">
        <!-- sidebar content -->
        <div class="flex-1 w-full overflow-y-auto p-5">
          <template v-for="(group, groupIndex) in navigationGroups" :key="groupIndex">
            <div class="mb-5">
              <div
                v-show="!props.miniOn"
                v-html="group.label"
                class="mb-3 text-zinc-400 dark:text-zinc-400"
              ></div>
              <nav class="rounded-lg flex flex-col">
                <template v-for="(link, linkIndex) in group.links" :key="linkIndex">
                  <nav-link :mini-on="props.miniOn" :link="link" />
                </template>
              </nav>
            </div>
          </template>
        </div>
        <!-- /sidebar content -->
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import NavLink from './NavLink.vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  miniOn: {
    type: Boolean,
    default: false
  }
})

const navigationGroups = [
  // Group #1
  {
    label: 'Dashboard',
    links: [
      {
        label: 'Visão geral',
        icon: 'pie-chart-fill',
        activeIn: ['home'],
        to: { name: 'home' }
      }
    ]
  },

  // Group #2
  {
    label: 'Development',
    links: [
      {
        label: 'Content Cards',
        icon: 'window',
        activeIn: ['contentCard'],
        to: { name: 'contentCard' }
      },
      {
        label: 'Buttons',
        icon: 'collection-fill',
        activeIn: ['buttons'],
        to: { name: 'buttons' }
      }
    ]
  },

  // Group #3
  {
    label: 'Outros',
    links: [
      {
        label: 'Meu perfil',
        icon: 'person-fill',
        activeIn: ['profile'],
        to: { name: 'profile' }
      },
      {
        label: 'Configurações',
        icon: 'gear-fill',
        activeIn: [],
        to: null
      },
      {
        label: 'Other item',
        icon: 'arrow-right',
        activeIn: [],
        to: null
      }
    ]
  }
]
</script>

<style lang="css" scoped>
.sidebar-width {
  width: calc(100% - 1.5rem);
}

.sideabar-max-width {
  max-width: calc(100px + 1.5rem);
}

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

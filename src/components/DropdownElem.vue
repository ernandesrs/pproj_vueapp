<template>
  <div class="relative">
    <div
      ref="activator"
      v-on:click="compData.show = !compData.show"
      class="relative z-10"
      role="button"
    >
      <div class="pointer-events-none">
        <slot name="activator" />
      </div>
    </div>

    <Transition :name="props.location == 'right' ? 'dropdown' : 'dropdown-left'">
      <div
        ref="content"
        v-show="compData.show"
        class="absolute z-50 top-full mt-2"
        :class="{ 'right-0': props.location == 'right', 'left-0': props.location == 'left' }"
      >
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

/**
 *
 * Props
 *
 */
const props = defineProps({
  /**
   * If true, starts with the dropped content
   */
  dropped: {
    type: Boolean,
    default: false
  },

  /**
   * If true, content will not be hidden when clicking outside
   */
  persistent: {
    type: Boolean,
    default: false
  },

  /**
   * Content location. Allows left or right
   */
  location: {
    type: String,
    default: 'right'
  }
})

/**
 *
 * Datas
 *
 */

// Component data
const compData = reactive({
  show: false,

  clickoutHandler: null
})

// Dropdown activator ref
const activator = ref(null)

// Dropdown content ref
const content = ref(null)

/**
 *
 * Methods
 *
 */
const clickoutHandler = (event) => {
  if (activator.value == event.target || content.value.contains(event.target)) {
    return
  }

  if (props.persistent) {
    content.value.classList.add('persistent-effect')
    setTimeout(() => {
      content.value.classList.remove('persistent-effect')
    }, 100)
    return
  }

  compData.show = !compData.show
}

/**
 *
 * Watchs
 *
 */

watch(
  () => props.dropped,
  (n) => {
    compData.show = n
  },
  { immediate: true }
)

watch(
  () => compData.show,
  (n) => {
    if (n) {
      // add click event monitor
      document.addEventListener('click', clickoutHandler)
    } else {
      // remove click event monitor
      document.removeEventListener('click', clickoutHandler)
    }
  },
  { immediate: true }
)
</script>

<style lang="css" scoped>
.persistent-effect {
  @apply -translate-y-2 scale-95 duration-75 ease-out;
}

.dropdown-enter-active {
  @apply duration-200 ease-in-out origin-top-right;
}

.dropdown-leave-active {
  @apply duration-75 ease-in origin-top-right;
}

.dropdown-left-enter-active {
  @apply duration-200 ease-in-out origin-top-left;
}

.dropdown-left-leave-active {
  @apply duration-75 ease-in origin-top-left;
}

.dropdown-enter-from,
.dropdown-leave-to,
.dropdown-left-enter-from,
.dropdown-left-leave-to {
  @apply -translate-y-3  scale-90 opacity-0;
}
</style>

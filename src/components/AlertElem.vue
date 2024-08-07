<template>
  <Transition name="alert">
    <div
      v-show="compState.show"
      v-on:mouseenter="pauseTimer"
      v-on:mouseleave="startTimer"
      class="alert-width-full max-w-[425px] p-2 fixed top-3 right-2 z-50"
    >
      <div class="bg-white flex gap-x-3 px-4 py-3 shadow rounded-lg relative">
        <div
          class="w-full h-1 absolute top-0 left-0 bg-zinc-200 rounded-tl-lg rounded-tr-lg overflow-hidden"
        >
          <div class="h-1 bg-zinc-400 duration-100" :style="getProgress"></div>
        </div>

        <icon-elem name="check-circle" class="text-4xl" />
        <div class="flex-1 bg-red-100">
          <div>title</div>
          <div>text</div>
        </div>
        <icon-elem
          v-on:click="closeAlert"
          name="x-circle"
          class="absolute top-2 right-1 text-xl cursor-pointer"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import IconElem from './IconElem.vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

// Component state
const compState = reactive({
  show: false,
  duration: 5000
})

const duration = reactive({
  runnedTime: 0,
  timeProgress: 0,

  runnedTimeIntervalId: null,
  timeProgressIntervalId: null
})

/**
 *
 * Methods
 *
 */

const checkAlert = () => {
  if (props.show || hasAlertContent) {
    setTimeout(() => {
      compState.show = true
    }, 1)
  }
}

const showAlert = () => {
  compState.show = true

  if (compState.duration) {
    startTimer()
  }
}

const closeAlert = () => {
  compState.show = false

  if (duration.runnedTimeIntervalId != null) {
    clearTimer()
  }
}

const startTimer = () => {
  duration.runnedTimeIntervalId = setInterval(() => {
    if (duration.runnedTime < compState.duration - 1000) {
      duration.runnedTime += 1000
    } else {
      closeAlert()
    }
  }, 1000)

  duration.timeProgressIntervalId = setInterval(() => {
    duration.timeProgress++
    if (duration.runnedTime >= compState.duration) {
      closeAlert()
    }
  }, compState.duration / 100)
}

const pauseTimer = () => {
  clearInterval(duration.runnedTimeIntervalId)
  clearInterval(duration.timeProgressIntervalId)
}

const clearTimer = () => {
  clearInterval(duration.runnedTimeIntervalId)
  clearInterval(duration.timeProgressIntervalId)

  duration.runnedTime = 0
  duration.timeProgress = 0
}

/**
 *
 * Computeds
 *
 */
const hasAlertContent = computed(() => {
  return true
})

const getProgress = computed(() => {
  return 'width: ' + duration.timeProgress + '%'
})

/**
 *
 * Watchs
 *
 */
watch(
  () => compState.show,
  (n) => {
    if (n) {
      showAlert()
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
checkAlert()
</script>

<style lang="css" scoped>
.alert-width-full {
  width: calc(100% - 0.55rem);
}

.alert-enter-active {
  @apply duration-300 ease-in-out;
}

.alert-leave-active {
  @apply duration-100 ease-out;
}

.alert-enter-from,
.alert-leave-to {
  @apply translate-x-1/2 scale-105;
}
</style>

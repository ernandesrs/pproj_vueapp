<template>
  <Transition name="alert">
    <div
      ref="alertEl"
      v-show="compState.show"
      v-on:mouseenter="mouseEnter"
      v-on:mouseleave="mouseLeave"
      class="alert-width-full max-w-[425px] p-2 fixed top-3 right-2 z-50"
    >
      <div
        class="flex gap-x-3 px-4 py-3 shadow rounded-lg relative cursor-default overflow-hidden"
        :class="
          {
            success: 'bg-emerald-600 text-emerald-100',
            info: 'bg-sky-500 text-sky-100',
            warning: 'bg-yellow-500 text-yellow-100',

            danger: 'bg-rose-500 text-rose-100',
            error: 'bg-rose-500 text-rose-100',
            fail: 'bg-rose-500 text-rose-100',
            denied: 'bg-rose-500 text-rose-100'
          }[compState.data?.color]
        "
      >
        <div
          v-if="compState?.duration"
          class="w-full h-[2px] absolute top-0 left-0 bg-transparent dark:bg-opacity-75"
        >
          <!-- timer progress -->
          <div
            class="h-[2px] rounded-lg duration-100"
            :class="
              {
                success: 'bg-emerald-700',
                info: 'bg-sky-600',
                warning: 'bg-yellow-600',

                danger: 'bg-rose-600',
                error: 'bg-rose-600',
                fail: 'bg-rose-600',
                denied: 'bg-rose-600'
              }[compState.data?.color]
            "
            :style="getProgress"
          ></div>
        </div>

        <!-- Icon -->
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center"
          :class="
            {
              success: 'bg-emerald-500 text-emerald-100',
              info: 'bg-sky-400 text-sky-100',
              warning: 'bg-yellow-600 text-yellow-100',

              danger: 'bg-rose-400 text-rose-100',
              error: 'bg-rose-400 text-rose-100',
              fail: 'bg-rose-400 text-rose-100',
              denied: 'bg-rose-400 text-rose-100'
            }[compState.data?.color]
          "
        >
          <icon-elem
            :name="
              {
                success: 'check',
                info: 'info',
                warning: 'exclamation',

                danger: 'exclamation',
                error: 'x',
                fail: 'x',
                denied: 'ban'
              }[compState.data?.color ?? 'success']
            "
            class="text-2xl"
          />
        </div>
        <div class="flex-1 flex flex-col font-normal">
          <div v-text="compState.data?.title" class="font-semibold"></div>
          <div v-text="compState.data?.text" class="flex-1 flex items-center"></div>
        </div>
        <icon-elem
          v-on:click="closeAlert"
          name="x-circle"
          class="absolute top-2 right-2 text-xl cursor-pointer text-rose-50"
        />
      </div>
    </div>
  </Transition>
</template>

<!-- 

Problema conhecido:
  - Em um alerta com timer, ao colocar e retirar o cursor do mouse sobre o alerta, há um problema em que
    o progresso do timer possui uma diferença para mais, que varia acima de 10 décimos de segundos, fazendo
    com que a barra de progresso preencha 100% antes do tempo final do alerta.
    - Possível origem: o setInterval

-->

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useAlertStore } from '@/stores/alert'
import IconElem from '@/components/IconElem.vue'

const alertStore = useAlertStore()

// Component state
const compState = reactive({
  show: false,
  duration: null,
  data: {
    id: null,
    title: null,
    text: null,
    color: 'success'
  }
})

const duration = reactive({
  runnedTime: 0,
  timeProgress: 0,

  runnedTimeIntervalId: null,
  timeProgressIntervalId: null
})

const alertEl = ref(null)

/**
 *
 * Methods
 *
 */

const showAlert = () => {
  // Sem o setTimeout, ao carregar/recarregar a página o alerta é renderizado sem a animação(Verificar para corrigir)
  setTimeout(() => {
    compState.show = true

    if (compState.duration) {
      startTimer()
    }

    setTimeout(() => {
      alertEl.value.classList.add('animate-bounce-alert')

      setTimeout(() => {
        alertEl.value.classList.remove('animate-bounce-alert')
      }, 375)
    }, 200)
  }, 1)
}

const closeAlert = () => {
  compState.show = false

  if (compState.duration != null) {
    clearTimer()
  }

  compState.data = {}
  alertStore.clear()
}

const mouseEnter = () => {
  if (compState.duration) {
    pauseTimer()
  }
}

const mouseLeave = () => {
  if (!compState.show || !compState.duration) {
    return
  }
  startTimer()
}

const startTimer = () => {
  duration.runnedTimeIntervalId = setInterval(() => {
    console.log('runnedTimeIntervalId')

    if (duration.runnedTime < compState.duration - 1000) {
      duration.runnedTime += 1000
    } else {
      closeAlert()
    }
  }, 1000)

  duration.timeProgressIntervalId = setInterval(() => {
    console.log('timeProgressIntervalId')

    duration.timeProgress++
    if (duration.runnedTime >= compState.duration) {
      closeAlert()
    }
  }, compState.duration / 100)
}

const pauseTimer = () => {
  clearIntervalIds()
}

const clearTimer = () => {
  clearIntervalIds()
  duration.runnedTime = 0
  duration.timeProgress = 0
}

const clearIntervalIds = () => {
  clearInterval(duration.runnedTimeIntervalId)
  clearInterval(duration.timeProgressIntervalId)
  duration.runnedTimeIntervalId = null
  duration.timeProgressIntervalId = null
}

/**
 *
 * Computeds
 *
 */
const getProgress = computed(() => {
  return 'width: ' + duration.timeProgress + '%'
})

/**
 *
 * Watchs
 *
 */

//  Watch for 'alertStore.hasNewAlert', get and show if has new alert
watch(
  () => alertStore.hasNewAlert,
  (n) => {
    if (n) {
      const updateAndShow = () => {
        compState.data = alertStore.get()
        compState.duration = compState.data?.duration
        showAlert()
      }

      if (compState.show) {
        closeAlert()
        setTimeout(() => {
          updateAndShow()
        }, 100)
      } else {
        updateAndShow()
      }
    }
  },
  { immediate: true }
)

/**
 *
 * Calls
 *
 */

//
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

.animate-bounce-alert {
  animation: McustomBounce 0.375s ease-in-out normal;
}

@keyframes McustomPing {
  75%,
  100% {
    transform: scale(1.05);
    opacity: 0.95;
  }
}

@keyframes McustomBounce {
  0%,
  10%,
  30%,
  50%,
  70%,
  90%,
  100% {
    transform: translateX(0);
  }

  20%,
  60% {
    transform: translateX(-20px);
  }

  40%,
  80% {
    transform: translateX(-5px);
  }
}
</style>

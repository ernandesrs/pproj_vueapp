<template>
  <div class="flex animate-pulsee bg-purple-800 w-full h-1 absolute top-0 left-0 overflow-hidden">
    <div class="loadbar_animation w-full h-full bg-purple-950"></div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.loadbar_animation {
  animation: translaterX 1.5s backwards infinite linear;
}

@keyframes translaterX {
  0% {
    transform: translateX(-100%);
    /* width: 100%; */
  }
  100% {
    transform: translateX(100%);
    /* width: 0%; */
  }
}
</style>

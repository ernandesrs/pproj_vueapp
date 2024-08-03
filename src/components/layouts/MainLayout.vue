<template>
  <div class="w-full h-screen flex bg-zinc-100">
    <!-- aside -->
    <aside class="w-full max-w-[80vw] sm:max-w-[325px] p-6">
      <div class="bg-zinc-800 w-full h-full flex flex-col rounded-lg shadow overflow-hidden">
        <!-- sidebar content -->
        <div class="flex-1 w-full overflow-y-auto p-5"></div>
        <!-- /sidebar content -->
      </div>
    </aside>
    <!-- /aside -->

    <!-- header/main -->
    <section class="flex-1 flex flex-col py-6 overflow-hidden">
      <!-- header -->
      <header class="w-full h-[65px] pr-6 rounded-lg overflow-hidden mb-3">
        <div class="w-full h-full rounded-lg flex gap-x-3 items-center">
          <!-- menu toggler -->
          <button class="py-3 px-2 border rounded-lg shadow">MENU</button>
          <!-- /menu toggler -->

          <!-- logo -->
          <a class="flex gap-x-2 items-center text-xl font-bold text-zinc-700" href="">
            <img class="w-7 h-7" src="@/assets/logo.svg" alt="Vue App" /> <span>VUEAPP</span>
          </a>
          <!-- /logo -->
        </div>
      </header>
      <!-- /header -->

      <!-- main -->
      <main class="w-full flex-1 overflow-y-auto pr-6 flex flex-col">
        <div class="flex-1 rounded-lg p-6 border bg-zinc-50">
          <router-view />
        </div>
      </main>
      <!-- /main -->
    </section>
    <!-- /header/main -->
  </div>
</template>

<script setup></script>

<style lang="css" scoped></style>

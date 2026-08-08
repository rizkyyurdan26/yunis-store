<template>
  <div class="flex flex-col min-h-dvh">
    <header></header>

    <div class="flex flex-1">
      <aside class="w-64 shrink-0"></aside>
      <main class="flex-1 min-w-0">
        <router-view></router-view>
      </main>
    </div>

    <footer></footer>
  </div>
</template>

<script setup></script>

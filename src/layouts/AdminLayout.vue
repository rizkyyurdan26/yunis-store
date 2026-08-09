<template>
  <div class="flex flex-col min-h-dvh">
    <header></header>

    <div class="flex flex-1">
      <SidebarAdmin />
      <main class="flex-1 min-w-0 m-5">
        <router-view></router-view>
      </main>
    </div>

    <footer></footer>
  </div>
</template>

<script setup>
import SidebarAdmin from '@/components/ui/SidebarAdmin.vue';

</script>

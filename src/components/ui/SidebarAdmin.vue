<template>
  <button
    @click="isShow = !isShow"
    :class="[
      'absolute z-50 cursor-pointer p-2 rounded-full transition-all duration-500',
      isShow
        ? 'left-50 top-5 text-white'
        : 'left-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-5 md:left-0 text-white bg-main',
    ]"
  >
    <Icon icon="ep:menu" class="w-5 h-5 md:h-7 md:w-7" />
  </button>

  <!-- Overlay -->
  <div
    v-if="isShow"
    class="absolute w-full min-h-dvh lg:hidden bg-black/20 z-10"
    @click="isShow = false"
  ></div>

  <aside
    :class="[
      'fixed md:sticky min-h-dvh z-30 inset-0 bg-main shadow-r-xl px-5 py-15 transition-all transform duration-500 overflow-hidden',
      isShow ? 'translate-x-0 w-64' : '-translate-x-full w-0 fixed',
    ]"
  >
    <div class="flex items-center gap-2">
      <img src="/logo.png" alt="" width="75" />
      <p class="text-xl font-extrabold text-white">
        YUNIS <br />
        <span class="flex items-center gap-2">STORE <Icon icon="mdi:trolley-outline" /></span>
      </p>
    </div>

    <nav class="flex flex-col mt-15 gap-5 w-full" @click="handleCloseMobile">
      <NavButton exact text="Dashboard" to="/admin" icon="material-symbols:dashboard" />
      <NavButton text="Product" to="/admin/product" icon="ix:product" />
      <NavButton text="Customer" to="/admin/customer" icon="ix:customer-filled" />
      <NavButton text="Transaction" to="/admin/transaction" icon="grommet-icons:transaction" />
      <NavButton
        text="Transaction Detail"
        to="/admin/transaction-detail"
        icon="icon-park-solid:transaction"
      />
    </nav>

    <span>Current</span>
  <input type="checkbox" value="dark" class="toggle theme-controller" />
  <span>Synthwave</span>
  </aside>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import NavButton from '../common/NavButton.vue'
import { onMounted, ref } from 'vue'

const isShow = ref(false)

const handleCloseMobile = () => {
  if (window.innerWidth < 1024) {
    isShow.value = false
  }
}

onMounted(() => {
  isShow.value = window.innerWidth >= 1024
})
</script>

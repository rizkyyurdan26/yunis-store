<script setup>
import { Icon } from '@iconify/vue'
import ReusableButton from '../common/ReusableButton.vue'
import { useHeaderNavigation } from '@/composables/useHeaderNavigation'

defineProps({
  solid: {
    type: Boolean,
    default: false,
  },
})

const {
  activeMenu,
  closeMobileMenu,
  isMobileMenuOpen,
  isScroll,
  scrollToContact,
  scrollToTop,
  showBackToTop,
  toggleMobileMenu,
} = useHeaderNavigation()
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div :class="['relative mx-auto flex h-16 max-w-5xl items-center justify-between px-6 transition-colors duration-300 ease-in-out', solid || isScroll || isMobileMenuOpen ? 'bg-cream' : 'bg-transparent']">
      <ReusableButton
        to="/#home"
        variant="brand"
        :class="['text-2xl', solid || isScroll || isMobileMenuOpen ? 'text-espresso' : 'text-ivory']"
      >
        Yunis <span class="italic font-light">Cosmetic</span>
      </ReusableButton>
      <nav aria-label="Navigasi utama" class="hidden items-center gap-6 md:flex">
        <ReusableButton to="/#home" text="Beranda" variant="nav" :active="activeMenu === 'home'" :class="solid || isScroll ? 'text-espresso' : 'text-ivory'" />
        <ReusableButton to="/#best-sellers" text="Best Seller" variant="nav" :active="activeMenu === 'bestseller'" :class="solid || isScroll ? 'text-espresso' : 'text-ivory'" />
        <ReusableButton to="/#about" text="Tentang Kami" variant="nav" :active="activeMenu === 'about'" :class="solid || isScroll ? 'text-espresso' : 'text-ivory'" />
        <ReusableButton to="/skincare" text="Skincare" variant="nav" :active="activeMenu === 'skincare'" :class="solid || isScroll ? 'text-espresso' : 'text-ivory'" />
        <ReusableButton text="Kontak" :active="activeMenu === 'contact'" @click="scrollToContact" />
      </nav>

      <button
        type="button"
        :class="['inline-flex size-10 items-center justify-center rounded-lg transition hover:bg-espresso/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden', solid || isScroll || isMobileMenuOpen ? 'text-espresso' : 'text-ivory']"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'"
        @click="toggleMobileMenu"
      >
        <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="size-7" aria-hidden="true" />
      </button>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <nav
          v-if="isMobileMenuOpen"
          id="mobile-navigation"
          aria-label="Navigasi seluler"
          class="absolute inset-x-0 top-full flex flex-col gap-1 rounded-b-xl bg-cream p-4 shadow-lg md:hidden"
        >
          <ReusableButton to="/#home" text="Beranda" variant="nav" class="w-full justify-start" :active="activeMenu === 'home'" @click="closeMobileMenu" />
          <ReusableButton to="/#best-sellers" text="Best Seller" variant="nav" class="w-full justify-start" :active="activeMenu === 'bestseller'" @click="closeMobileMenu" />
          <ReusableButton to="/#about" text="Tentang Kami" variant="nav" class="w-full justify-start" :active="activeMenu === 'about'" @click="closeMobileMenu" />
          <ReusableButton to="/skincare" text="Skincare" variant="nav" class="w-full justify-start" :active="activeMenu === 'skincare'" @click="closeMobileMenu" />
          <ReusableButton text="Kontak" class="mt-2 self-start" :active="activeMenu === 'contact'" @click="scrollToContact" />
        </nav>
      </Transition>

      <button
        v-if="showBackToTop"
        type="button"
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
        class="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full border border-white/70 bg-espresso text-white shadow-lg transition hover:-translate-y-1 hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-8 sm:right-8"
        @click="scrollToTop"
      >
        <Icon icon="mdi:arrow-up" class="size-6" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>

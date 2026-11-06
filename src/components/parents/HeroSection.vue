<script setup>
import img from '../../assets/bghero.webp'
import CardHero from '../common/CardHero.vue'
import MainButton from '../common/MainButton.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <section id="home" class="flex min-h-dvh w-full flex-col">
    <div
      class="relative isolate flex min-h-[34rem] flex-1 items-center bg-cover bg-[position:62%_center] px-5 pb-12 pt-24 sm:px-8 md:min-h-0 md:bg-center md:px-16 md:py-24 lg:px-24"
      :style="{ backgroundImage: `url(${img})` }"
    >
      <div class="absolute inset-0 z-0 bg-linear-to-r from-espresso/85 via-espresso/60 to-espresso/15"></div>
      <!-- Content -->
      <div class="relative z-10 flex w-full max-w-xl flex-col items-start text-left">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 backdrop-blur-md"
        > 
          <span class="size-1.5 rounded-full bg-gold-soft"></span>
          <p class="text-xs font-medium tracking-wide text-ivory sm:text-sm">Reseller Resmi Erliance</p>
        </div>
        <h1 class="mb-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ivory sm:text-5xl md:text-6xl">
          Kecantikan Natural<br /><span class="font-light italic text-cream">Sepanjang Waktu</span>
        </h1>
        <p class="max-w-lg text-sm leading-relaxed text-ivory/90 sm:text-base">
          Temukan pilihan skincare dan produk kecantikan untuk menemani rutinitasmu. Pilih produk
          favorit dan rawat diri dengan nyaman setiap hari.
        </p>

        <!-- Button -->
        <div class="mt-7 flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 md:mt-9">
          <MainButton text="Lihat Produk" icon="ic:baseline-arrow-downward" transparent @click="scrollToSection('best-sellers')" />
          <MainButton text="Hubungi kami" icon="ic:baseline-arrow-downward" @click="scrollToSection('kontak')" />
        </div>
      </div>
    </div>

    <!-- Card hero -->
    <div class="grid shrink-0 grid-cols-2 gap-3 bg-cream/50 p-4 sm:gap-4 sm:p-5 md:grid-cols-4">
      <CardHero text="Natural Ingredients" icon="mdi:leaf" />
      <CardHero text="Dermatology Tested" icon="mdi:shield-check-outline" />
      <CardHero text="Premium Quality" icon="mdi:diamond-stone" />
      <CardHero text="Sustainable Beauty" icon="mdi:recycle" />
    </div>
  </section>
</template>

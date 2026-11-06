<script setup>
import CardProduct from '../common/CardProduct.vue'
import { Products } from '@/data/products'

const bestSellers = Products.filter((product) => product.isBestSeller)
</script>

<template>
  <section id="best-sellers" class="bg-white px-5 py-14 sm:px-8 md:px-12 md:py-16">
    <div class="mb-7 flex items-end justify-between gap-4">
      <div>
        <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Pilihan Favorit</p>
        <h2 class="font-serif text-2xl text-espresso sm:text-3xl">Produk Best Seller</h2>
      </div>
      <span class="hidden text-xs tracking-wide text-brown-muted sm:block">Pilihan untuk rutinitas kecantikanmu</span>
    </div>

    <div class="grid grid-cols-2 items-stretch gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4">
      <CardProduct v-for="product in bestSellers" :key="product.id" :product="product" :show-whatsapp="false" />
    </div>
  </section>
</template>

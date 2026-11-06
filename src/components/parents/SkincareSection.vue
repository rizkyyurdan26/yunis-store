<script setup>
import CardProduct from '../common/CardProduct.vue'
import ReusableButton from '../common/ReusableButton.vue'
import { Products } from '@/data/products'

const essentialProducts = Products.filter((product) => product.isEssential)
</script>

<template>
  <section id="skincare-preview" class="bg-white px-5 py-14 sm:px-8 md:px-12 md:py-16">
    <div class="mb-7 flex items-end justify-between gap-4">
      <div>
        <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Rawat Kulitmu</p>
        <h2 class="font-serif text-2xl text-espresso sm:text-3xl">Skincare Essentials</h2>
      </div>
      <ReusableButton
        to="/skincare"
        text="Lihat Semua Skincare"
        icon="mdi:arrow-right"
        variant="footer"
        class="shrink-0 text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
      />
    </div>

    <div class="grid grid-cols-2 items-stretch gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4">
      <CardProduct v-for="product in essentialProducts" :key="product.id" :product="product" :show-whatsapp="false" />
    </div>
  </section>
</template>

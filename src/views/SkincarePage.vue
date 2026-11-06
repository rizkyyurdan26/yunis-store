<script setup>
import CardProduct from '@/components/common/CardProduct.vue'
import FooterSection from '@/components/parents/FooterSection.vue'
import HeaderSection from '@/components/parents/HeaderSection.vue'
import ReusableButton from '@/components/common/ReusableButton.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { Products } from '@/data/products'
import { adminWhatsAppNumber } from '@/data/contact'

const route = useRoute()
const activeCategory = ref(route.hash === '#acne-prone' ? 'acne-prone' : 'anti-aging')
const antiAgingProducts = Products.filter((product) => product.categories.includes('anti-aging'))
const acneProneProducts = Products.filter((product) => product.categories.includes('acne-prone'))

watch(() => route.hash, (hash) => {
  if (hash === '#acne-prone' || hash === '#anti-aging') {
    activeCategory.value = hash.slice(1)
  }
})

useScrollSpy({
  'anti-aging': 'anti-aging',
  'acne-prone': 'acne-prone',
}, (category) => {
  activeCategory.value = category
})
</script>

<template>
  <div class="bg-amber-50">
    <div class="mx-auto flex min-h-dvh max-w-5xl flex-col bg-white">
      <HeaderSection solid />

      <main class="flex-1 px-5 pb-16 pt-28 sm:px-8 md:px-12">
        <div class="mb-10">
          <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Rawat Kulitmu</p>
          <h1 class="font-serif text-3xl text-espresso sm:text-4xl">Erliance Skincare</h1>
          
          <nav aria-label="Kategori skincare" class="mt-6">
            <div class="flex flex-wrap gap-3">
              <ReusableButton
                to="/skincare#anti-aging"
                text="Anti-aging"
                variant="category"
                :active="activeCategory === 'anti-aging'"
              />
              <ReusableButton
                to="/skincare#acne-prone"
                text="Kulit Berjerawat"
                variant="category"
                :active="activeCategory === 'acne-prone'"
              />
            </div>
          </nav>
        </div>

        <section id="anti-aging" class="mb-14 scroll-mt-24">
          <div class="mb-5">
            <h2 class="font-serif text-2xl text-espresso">Anti-aging</h2>
            <p class="mt-1 text-sm text-brown-muted">Perawatan untuk menjaga kulit terasa lembap dan tampak segar.</p>
          </div>
          <div class="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-5">
            <CardProduct
              v-for="product in antiAgingProducts"
              :key="product.id"
              :product="product"
              :show-whatsapp="true"
              :whatsapp-number="adminWhatsAppNumber"
            />
          </div>
        </section>

        <section id="acne-prone" class="scroll-mt-24">
          <div class="mb-5">
            <h2 class="font-serif text-2xl text-espresso">Kulit Berjerawat</h2>
            <p class="mt-1 text-sm text-brown-muted">Pilihan ringan untuk melengkapi rutinitas kulit berjerawat.</p>
          </div>
          <div class="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-5">
            <CardProduct
              v-for="product in acneProneProducts"
              :key="product.id"
              :product="product"
              :show-whatsapp="true"
              :whatsapp-number="adminWhatsAppNumber"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  </div>
</template>

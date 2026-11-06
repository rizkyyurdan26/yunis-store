<script setup>
import { Icon } from '@iconify/vue'
import ReusableButton from '@/components/common/ReusableButton.vue'
import FooterSection from '@/components/parents/FooterSection.vue'
import { useProductDetail } from '@/composables/useProductDetail'
import { formatPrice } from '@/utils/formatPrice'

const { goBack, product, whatsappUrl } = useProductDetail()
const categoryLabels = {
  'anti-aging': 'Anti-aging',
  'acne-prone': 'Kulit Berjerawat',
  makeup: 'Makeup',
}
</script>

<template>
  <div class="bg-amber-50">
    <div class="mx-auto flex min-h-dvh max-w-5xl flex-col bg-white">
      <main class="flex-1 px-5 pb-16 pt-8 sm:px-8 md:px-12 md:pt-10">
        <button
          type="button"
          aria-label="Kembali"
          title="Kembali"
          class="mb-8 flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-espresso shadow-sm transition hover:bg-cream/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:size-11"
          @click="goBack"
        >
          <Icon icon="akar-icons:arrow-back-thick-fill" class="size-5 sm:size-6" aria-hidden="true" />
        </button>

        <section v-if="product" class="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div class="overflow-hidden rounded-3xl bg-cream/40 p-6 sm:p-10">
            <img :src="product.image" :alt="product.name" class="aspect-[4/4] w-full object-contain" />
          </div>

          <div class="py-2">
            <span class="inline-flex rounded-full bg-cream/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold">
              {{ product.isBestSeller ? 'Best Seller' : categoryLabels[product.categories[0]] }}
            </span>
            <h1 class="mt-4 font-serif text-3xl leading-tight text-espresso sm:text-4xl">{{ product.name }}</h1>
            <p class="mt-3 text-xl font-semibold text-espresso">{{ formatPrice(product.price) }}</p>
            <div class="mt-3 inline-flex h-8 max-w-full items-center gap-1.5 rounded-full bg-cream/55 px-2.5 text-[10px] font-medium tracking-wide text-brown-muted sm:text-xs">
              <Icon icon="mdi:sparkles" class="size-3.5 shrink-0 text-gold" aria-hidden="true" />
              <span class="min-w-0 truncate">{{ product.benefit }}</span>
            </div>
            <p class="mt-3 text-base leading-relaxed text-brown-muted">{{ product.description }}</p>

            <a
              v-if="whatsappUrl"
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1fb855] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] sm:w-auto"
            >
              <Icon icon="mdi:whatsapp" class="size-5" aria-hidden="true" />
              Tanyakan produk ini melalui WhatsApp
            </a>
          </div>
        </section>

        <section v-else class="rounded-3xl bg-ivory px-6 py-14 text-center sm:py-20">
          <h1 class="font-serif text-3xl text-espresso">Produk tidak ditemukan</h1>
          <p class="mt-3 text-brown-muted">Produk yang kamu cari mungkin sudah tidak tersedia.</p>
          <ReusableButton to="/skincare" text="Kembali ke skincare" class="mt-6" />
        </section>
      </main>

      <FooterSection />
    </div>
  </div>
</template>

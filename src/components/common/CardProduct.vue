<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { useWhatsAppLink } from '@/composables/useWhatsAppLink'
import { formatPrice } from '@/utils/formatPrice'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  showWhatsapp: {
    type: Boolean,
    default: false,
  },
  whatsappNumber: {
    type: String,
    default: '',
  },
})

const whatsappUrl = useWhatsAppLink(() => props.product, () => props.whatsappNumber)
const categoryLabels = {
  'anti-aging': 'Anti-aging',
  'acne-prone': 'Kulit Berjerawat',
  makeup: 'Makeup',
}
</script>

<template>
  <article class="group flex h-full min-w-0 flex-col">
    <div class="relative mb-3 overflow-hidden rounded-xl bg-cream/40 p-3 sm:p-5">
      <RouterLink :to="`/products/${product.id}`" :aria-label="`Lihat detail ${product.name}`">
        <img
          :src="product.image"
          :alt="product.name"
        class="aspect-[4/5] w-full object-contain transition duration-500 group-hover:scale-112"
        />

      </RouterLink>
      <span class="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-gold backdrop-blur-sm">
        {{ product.isBestSeller ? 'Best Seller' : categoryLabels[product.categories[0]] }}
      </span>
    </div>

    <div class="flex flex-1 flex-col px-1">
      <div class="mb-2 inline-flex h-8 max-w-full items-center gap-1.5 self-start rounded-full bg-cream/55 px-2.5 text-[10px] font-medium tracking-wide text-brown-muted sm:text-xs">
        <Icon icon="mdi:sparkles" class="size-3.5 text-gold" aria-hidden="true" />
        <span class="min-w-0 truncate">{{ product.benefit }}</span>
      </div>
      <h3 class="h-5 truncate text-sm font-semibold leading-5 text-espresso sm:text-base" :title="product.name">
        <RouterLink :to="`/products/${product.id}`" class="transition-colors hover:text-gold">{{ product.name }}</RouterLink>
      </h3>
      <p class="mt-1 line-clamp-2 text-xs leading-4 text-brown-muted sm:text-sm sm:leading-5">{{ product.description }}</p>

      <p class="mt-auto pt-3 text-sm font-semibold text-espresso sm:text-base">{{ formatPrice(product.price) }}</p>

      <a
        v-if="showWhatsapp && whatsappUrl"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-2 inline-flex h-9 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-[#25D366]/35 bg-cream/35 px-2 text-[10px] font-semibold text-espresso transition hover:border-[#25D366]/70 hover:bg-[#25D366]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] sm:gap-2 sm:text-xs"
      >
        <Icon icon="mdi:whatsapp" class="size-4 shrink-0 text-[#25D366]" aria-hidden="true" />
        Tanya melalui WhatsApp
      </a>
      <button
        v-else-if="showWhatsapp"
        type="button"
        disabled
        class="mt-2 inline-flex h-9 w-full cursor-not-allowed items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-border bg-cream/30 px-2 text-[10px] font-semibold text-title sm:gap-2 sm:text-xs"
      >
        <Icon icon="mdi:whatsapp" class="size-4 shrink-0" aria-hidden="true" />
        Tanya melalui WhatsApp
      </button>
    </div>
  </article>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  text: String,
  icon: String,
})
</script>

<template>
  <div class="group flex min-h-20 items-center gap-3 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-md sm:gap-4 sm:px-5">
    <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white sm:size-12">
      <Icon :icon="icon" class="size-6 sm:size-7" aria-hidden="true" />
    </span>
    <span class="text-sm font-semibold leading-snug text-espresso sm:text-base">{{ text }}</span>
  </div>
</template>

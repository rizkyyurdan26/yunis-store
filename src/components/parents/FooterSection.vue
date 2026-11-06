<script setup>
import { Icon } from '@iconify/vue'
import ReusableButton from '../common/ReusableButton.vue'

</script>

<template>
  <footer id="kontak" class="border-t border-border bg-ivory text-espresso">
    <div class="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>
    <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 py-10 sm:px-8 md:grid-cols-12 md:gap-8 md:px-12 md:py-14">
      <div class="md:col-span-4">
        <p class="font-serif text-2xl tracking-[0.12em]">YUNIS <span class="italic">Cosmetic</span></p>
        <p class="mt-1 text-xs tracking-wide text-brown-muted">Kecantikan alami, sepanjang waktu.</p>
        <p class="mt-5 max-w-xs text-sm leading-relaxed text-brown-muted">
          Perawatan yang terinspirasi dari kecantikan alami untuk menemani rutinitasmu setiap hari.
        </p>
      </div>

      <nav aria-label="Jelajahi" class="flex flex-col items-start gap-3 md:col-span-2">
        <h2 class="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Jelajahi</h2>
        <ReusableButton to="/#home" text="Beranda" variant="footer" />
        <ReusableButton to="/#about" text="Tentang Kami" variant="footer" />
        <ReusableButton to="/skincare" text="Skincare" variant="footer" />
      </nav>

      <div class="flex flex-col items-start gap-3 md:col-span-3">
        <h2 class="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Komitmen Kami</h2>
        <span class="text-sm text-brown-muted">Natural ingredients</span>
        <span class="text-sm text-brown-muted">Dermatology tested</span>
        <span class="text-sm text-brown-muted">Sustainable beauty</span>
      </div>

      <div class="flex items-center gap-4 border-t border-border pt-5 md:col-span-3 md:justify-center md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <Icon icon="mdi:leaf" class="size-9 shrink-0 text-gold" aria-hidden="true" />
        <p class="text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-brown-muted">
          Kecantikan natural<br />sepanjang waktu
        </p>
      </div>

      <div class="flex flex-col gap-3 border-t border-border pt-5 text-xs text-brown-muted sm:flex-row sm:items-center sm:justify-between md:col-span-12">
        <span>© 2026 Yunis Cosmetic. Hak cipta dilindungi.</span>
      </div>
    </div>
  </footer>
</template>

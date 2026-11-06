<script setup>
import aboutImage from '../../assets/about.webp'
</script>

<template>
  <section id="about" class="grid items-center gap-10 bg-ivory px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-14 md:px-16 md:py-24 lg:px-24">
    <div class="relative isolate mx-auto w-full max-w-xl">
      <img
        :src="aboutImage"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 z-0 size-full scale-[1.06] rounded-3xl object-cover blur-2xl opacity-70"
      />
      <img
        :src="aboutImage"
        alt=""
        class="relative z-10 aspect-[4/3] w-full rounded-3xl object-cover"
      />
    </div>

    <div class="max-w-xl">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Tentang Kami</p>
      <h2 class="mb-5 text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
        Perawatan sederhana untuk kecantikan alami.
      </h2>
      <p class="leading-relaxed text-brown-muted">
        Yunis Cosmetic menghadirkan pilihan perawatan kulit yang mengutamakan bahan berkualitas,
        kenyamanan, dan kepercayaan diri. Temukan produk yang sesuai untuk menemani rutinitas
        perawatanmu setiap hari.
      </p>
    </div>
  </section>
</template>

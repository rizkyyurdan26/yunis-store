<script setup>
import HeaderSection from '@/components/parents/HeaderSection.vue';
import HeroSection from '@/components/parents/HeroSection.vue'
import AboutSection from '@/components/parents/AboutSection.vue'
import BestSellerSection from '@/components/parents/BestSellerSection.vue'
import SkincareSection from '@/components/parents/SkincareSection.vue'
import FooterSection from '@/components/parents/FooterSection.vue'
</script>

<template>
  <div class="relative isolate min-h-dvh bg-cream/20">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 bg-cream/40 backdrop-blur-3xl"></div>
    <div class="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col bg-white">
      <HeaderSection />
      <HeroSection />
      <BestSellerSection />
      <AboutSection />
      <SkincareSection />
      <FooterSection />
    </div>  
  </div>
</template>

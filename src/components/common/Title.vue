<template>
  <section id="create-update-product">
    <h2 class="font-bold text-2xl md:text-3xl">{{ text }}</h2>
  </section>
</template>

<script setup>
defineProps({
  text: String,
})
</script>

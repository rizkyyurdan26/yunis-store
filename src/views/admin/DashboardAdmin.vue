<template>
  <div>Dashboard admin</div>
</template>

<script setup>
import { productService } from '@/services/product.service';
import { onMounted } from 'vue';

const product = productService

onMounted(async() => {
  await product.getAll()
  await product.getDetail("fe578f40-c9ab-44cf-b5ab-5431c8b1eb43")
})
</script>

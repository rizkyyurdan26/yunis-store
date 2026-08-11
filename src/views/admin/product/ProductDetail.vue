<template>
  <section id="product-detail" class="m-5">
    <BackButton />
    <Title text="Product Detail" class="mt-5" />
    <div v-if="detailData" class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
      <!-- Image -->
      <div v-if="detailData.images?.length" class="flex flex-col items-center">
        <img :src="selectedImage || detailData.images[0]" alt="main-image" class="object-cover h-100 w-100" />
        <div class="grid grid-cols-3 mt-5 gap-5" >
          <img v-for="img in detailData.images" class="border border-border-form p-2 rounded-lg object-cover h-20 w-20" :src="img"  @click="selectedImage = img"/>
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col items-start">
        <h3 class="capitalize font-semibold text-xl md:text-2xl">{{ detailData.product_name }}</h3>
        <span
          :class="[
            'px-3 py-px rounded-xl mt-2',
            detailData.is_active === true
              ? 'bg-success/20 text-success'
              : 'bg-danger/20 text-danger',
          ]"
          >Status: {{ detailData.is_active === true ? 'Tersedia' : 'Tidak Tersedia' }}</span
        >

        <div>
          <p class="text-lg font-semibold mt-5 text-success">Harga Asli: {{ useCurrency(detailData.price) }}</p>
          <p class="text-lg font-semibold text-warning">Diskon: {{ useCurrency(detailData.discount) }}</p>
          <p class="text-lg font-semibold text-brave">Harga Final: {{ useCurrency(detailData.final_price) }}</p>

        </div>
        <p class="mt-5 text-lg">Deskripsi: {{ detailData.description }}</p>

        <h4 class="mt-5 font-semibold text-lg">System Information:</h4>
        <ul class="list-disc list-outside ml-5 mt-2 text-lg">
          <li>product_id: {{ detailData.product_id }}</li>
          <li>created_at: {{ detailData.created_at }}</li>
          <li>updated_at: {{ detailData.updated_at }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackButton from '@/components/common/BackButton.vue'
import Title from '@/components/common/Title.vue'
import { useProductStore } from '@/stores/product.store'
import { useCurrency } from '@/utils/currency'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const productStore = useProductStore()
const detailData = ref(null)
const route = useRoute()
const selectedImage = ref(null)

onMounted(async () => {
  detailData.value = await productStore.getDetail(route.params.product_id)
  // console.log(detailData.value)
})
</script>

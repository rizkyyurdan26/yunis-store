<template>
  <section id="product" class="flex flex-col">
    <Title text="Product Store" />
    <div class="flex items-start mt-5">
      <LinkButton text="Create new" icon="tabler:plus-filled" to="/admin/product/create" />
    </div>
    <div class="overflow-x-auto mt-5">
      <MainTable
        :columns="columns"
        :data="product.dataProduct"
        key-index="product_id"
        @detail="handleDetail"
        @delete="handleDelete"
      >
      </MainTable>
    </div>
  </section>
</template>

<script setup>
import ActionButton from '@/components/common/ActionButton.vue'
import LinkButton from '@/components/common/LinkButton.vue'
import Title from '@/components/common/Title.vue'
import MainTable from '@/components/table/MainTable.vue'
import { useProductStore } from '@/stores/product.store'
import { useCurrency } from '@/utils/currency'
import { useFormatStatus } from '@/utils/formatStatus'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const product = useProductStore()
const router = useRouter()

const columns = [
  { key: 'product_name', label: 'Nama Product' },
  { key: 'price', label: 'Harga', format: useCurrency },
  { key: 'stock', label: 'Stok' },
  { key: 'is_active', label: 'Status', format: useFormatStatus },
]

const handleDetail = (product_id) => {
  router.push(`/admin/product/${product_id}`)
}

const handleDelete = async (item) => {
  if (confirm(`Delete data ${item.product_name}?`)) {
    try {
      await product.deleteProduct(item.product_id)
      alert(`Data ${item.product_name} berhasil dihapus`)
    } catch (err) {
      console.error(err)
      alert(`Gagal menghapus data: ${err.message}`)
    }
  }
}

onMounted(async () => {
  await product.getAll()
  await product.getDetail('fe578f40-c9ab-44cf-b5ab-5431c8b1eb43')
})
</script>

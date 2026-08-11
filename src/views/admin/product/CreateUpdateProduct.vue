<template>
  <div>
    <Title text="Create Product" />

    <form @submit.prevent="handleSubmit" class="flex flex-col w-full max-w-lg mt-10 gap-5">
      <FormInput
        label="Nama Produk :"
        required
        placeholder="Ex: Product A"
        v-model="form.product_name"
      />

      <div class="grid grid-cols-2 gap-5">
        <FormInput label="Price :" required type="number" v-model="form.price" />
        <FormInput label="Stock :" required type="number" v-model="form.stock" />
        <FormSelect label="Status : " :data="options" v-model="form.is_active" required />
        <FormInput
          label="Diskon :"
          type="number"
          placeholder="Hanya jika diskon"
          v-model="form.discount"
        />
      </div>

      <FormTexArea
        label="Deskripsi :"
        placeholder="Ex: Input tentang produk, spesifikasi, kelebihan, dll "
        v-model="form.description"
      />
      <FormInputFile v-model="form.images" label="Gambar Product : (max 500kb / image)" multiple/>

      <div>
        <ActionButton type="submit" text="Submit" />
      </div>
    </form>
  </div>
</template>

<script setup>
import ActionButton from '@/components/common/ActionButton.vue'
import Title from '@/components/common/Title.vue'
import FormInput from '@/components/form/FormInput.vue'
import FormInputFile from '@/components/form/FormInputFile.vue'
import FormSelect from '@/components/form/FormSelect.vue'
import FormTexArea from '@/components/form/FormTexArea.vue'
import { useProductStore } from '@/stores/product.store'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useProductStore()
const router = useRouter()

const form = reactive({
  product_name: '',
  price: null,
  stock: 0,
  description: '',
  is_active: true,
  discount: null,
  images: [],
})

const options = ref([
  { value: true, label: 'Tersedia' },
  { value: false, label: 'Tidak Tersedia' },
])

const handleSubmit = async () => {
  if (confirm('Apakah data sudah sesuai?')) {
    try {
      await store.createProduct(form)
      alert('Produk berhasil di upload ✅')
      router.push('/admin/product')
    } catch (err) {
      alert(`Gagal create: ${err.message}`)
    }
  }
  // console.log({...form})
}
</script>

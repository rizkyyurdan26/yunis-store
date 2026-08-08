import { productService } from '@/services/product.service'
import { getErrorMessage } from '@/utils/error'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const dataProduct = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function getAll() {
    dataProduct.value = []
    loading.value = true
    error.value = null

    try {
      const data = await productService.getAll()
      dataProduct.value = data
      return data
    } catch (err) {
      error.value = getErrorMessage(err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function getDetail(product_id) {
    loading.value = true
    error.value = null

    try {
      const data = await productService.getDetail(product_id)
      return data
    } catch (err) {
      error.value = getErrorMessage(err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function createProduct(payload) {
    loading.value = true
    error.value = null

    try {
      const data = await productService.create(payload)
      dataProduct.value.unshift(data)
      return data
    } catch (err) {
      error.value = getErrorMessage(err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateProduct(product_id, payload) {
    loading.value = true
    error.value = null

    try {
      const data = await productService.update(product_id, payload)

      const idx = dataProduct.value.findIndex(
        (item) => String(item.product_id) === String(product_id),
      )

      if (idx !== -1) {
        dataProduct.value[idx] = data
      }

      return data
    } catch (err) {
      error.value = getErrorMessage(err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function deleteProduct(product_id) {
    loading.value = true
    error.value = null

    try {
      await productService.delete(product_id)
      dataProduct.value = dataProduct.value.filter(
        (item) => String(item.product_id) !== String(product_id),
      )
    } catch (err) {
      error.value = getErrorMessage(err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    dataProduct,
    loading,
    error,
    getAll,
    getDetail,
    createProduct,
    updateProduct,
    deleteProduct,
  }
})

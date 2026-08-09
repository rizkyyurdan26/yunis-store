import { productService } from '@/services/product.service'
import { getErrorMessage } from '@/utils/error'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const dataProduct = ref([])

  const loadingGet = ref(false)
  const loadingCreate = ref(false)
  const loadingGetDetail = ref(new Set())
  const loadingUpdate = ref(new Set())
  const loadingDelete = ref(new Set())

  const errorGet = ref(null)
  const errorGetDetail = ref(null)
  const errorCreate = ref(null)
  const errorUpdate = ref(null)
  const errorDelete = ref(null)

  async function getAll() {
    dataProduct.value = []
    loadingGet.value = true
    errorGet.value = null

    try {
      const data = await productService.getAll()
      dataProduct.value = data
      return data
    } catch (err) {
      errorGet.value = getErrorMessage(err)
      throw err
    } finally {
      loadingGet.value = false
    }
  }

  async function getDetail(product_id) {
    loadingGetDetail.value.add(product_id)
    errorGetDetail.value = null

    try {
      const data = await productService.getDetail(product_id)
      return data
    } catch (err) {
      errorGetDetail.value = getErrorMessage(err)
      throw err
    } finally {
      loadingGetDetail.value.delete(product_id)
    }
  }

  async function createProduct(payload) {
    loadingCreate.value = true
    errorCreate.value = null

    try {
      const data = await productService.create(payload)
      dataProduct.value.unshift(data)
      return data
    } catch (err) {
      errorCreate.value = getErrorMessage(err)
      throw err
    } finally {
      loadingCreate.value = false
    }
  }

  async function updateProduct(product_id, payload) {
    loadingUpdate.value.add(product_id)
    errorUpdate.value = null

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
      errorUpdate.value = getErrorMessage(err)
      throw err
    } finally {
      loadingUpdate.value.delete(product_id)
    }
  }

  async function deleteProduct(product_id) {
    loadingDelete.value.add(product_id)
    errorDelete.value = null

    try {
      await productService.delete(product_id)
      dataProduct.value = dataProduct.value.filter(
        (item) => String(item.product_id) !== String(product_id),
      )
    } catch (err) {
      errorDelete.value = getErrorMessage(err)
      throw err
    } finally {
      loadingDelete.value.delete(product_id)
    }
  }

  return {
    dataProduct,
    loadingGet,
    loadingGetDetail,
    loadingCreate,
    loadingUpdate,
    loadingDelete,
    errorGet,
    errorGetDetail,
    errorCreate,
    errorUpdate,
    errorDelete,
    getAll,
    getDetail,
    createProduct,
    updateProduct,
    deleteProduct,
  }
})

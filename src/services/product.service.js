import api from './api'

export const productService = {
  async getAll() {
    const res = await api.get(
      '/rest/v1/products?select=product_id,product_name,price,stock,is_active',
    )
    // console.log(res.data)
    return res.data
  },

  async getDetail(product_id) {
    const res = await api.get(`/rest/v1/products?product_id=eq.${product_id}`)
    // console.log(res.data[0])
    return res.data[0] || null
  },

  async create(payload) {
    const res = await api.post('/rest/v1/products', payload)
    return res.data[0]
  },

  async update(product_id, payload) {
    const res = await api.patch(`/rest/v1/products?product_id=eq.${product_id}`, payload)
    return res.data[0]
  },

  async delete(product_id) {
    const res = await api.delete(`/rest/v1/products?product_id=eq.${product_id}`)
    return res.data
  },
}

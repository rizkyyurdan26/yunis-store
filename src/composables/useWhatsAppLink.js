import { computed, toValue } from 'vue'

export function useWhatsAppLink(product, phoneNumber) {
  return computed(() => {
    const currentProduct = toValue(product)
    const number = String(toValue(phoneNumber) || '').replace(/\D/g, '')

    if (!currentProduct || !number) return ''

    const message = encodeURIComponent(`Halo admin, saya ingin bertanya tentang ${currentProduct.name}.`)
    return `https://wa.me/${number}?text=${message}`
  })
}

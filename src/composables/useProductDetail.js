import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Products } from '@/data/products'
import { adminWhatsAppNumber } from '@/data/contact'
import { useWhatsAppLink } from './useWhatsAppLink'

export function useProductDetail() {
  const route = useRoute()
  const router = useRouter()
  const product = computed(() =>
    Products.find((item) => item.id === Number(route.params.productId)),
  )

  const whatsappUrl = useWhatsAppLink(product, adminWhatsAppNumber)

  const goBack = () => {
    if (window.history.state.back) {
      router.back()
    } else {
      router.push('/skincare')
    }
  }

  return { goBack, product, whatsappUrl }
}

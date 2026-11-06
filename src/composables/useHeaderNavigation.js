import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollSpy } from './useScrollSpy'

const homeSections = {
  home: 'home',
  'best-sellers': 'bestseller',
  about: 'about',
  'skincare-preview': 'skincare',
  kontak: 'contact',
}

export function useHeaderNavigation() {
  const route = useRoute()
  const isScroll = ref(false)
  const isMobileMenuOpen = ref(false)
  const showBackToTop = ref(false)
  const activeMenu = ref('home')

  useScrollSpy(homeSections, (menu) => {
    if (route.path === '/') activeMenu.value = menu
  }, { enabled: () => route.path === '/' })

  watch(() => [route.path, route.hash], () => {
    if (route.path === '/skincare' || route.path.startsWith('/products/')) {
      activeMenu.value = 'skincare'
    } else if (route.hash === '#best-sellers') {
      activeMenu.value = 'bestseller'
    } else if (route.hash === '#about') {
      activeMenu.value = 'about'
    } else {
      activeMenu.value = 'home'
    }
  }, { immediate: true })

  const handleScroll = () => {
    isScroll.value = window.scrollY > 20
    showBackToTop.value = window.scrollY > 300

    const contactSection = document.getElementById('kontak')
    const contactIsVisible = contactSection && contactSection.getBoundingClientRect().top < window.innerHeight * 0.9

    if (route.path === '/skincare') {
      activeMenu.value = contactIsVisible ? 'contact' : 'skincare'
    } else if (contactIsVisible) {
      activeMenu.value = 'contact'
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const scrollToContact = () => {
    document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
    activeMenu.value = 'contact'
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  return {
    activeMenu,
    closeMobileMenu,
    isMobileMenuOpen,
    isScroll,
    scrollToContact,
    scrollToTop,
    showBackToTop,
    toggleMobileMenu,
  }
}

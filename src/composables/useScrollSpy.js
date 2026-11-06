import { onMounted, onUnmounted, toValue, watch } from 'vue'

export function useScrollSpy(sections, onActiveChange, options = {}) {
  const activeLine = options.activeLine ?? 0.35
  const enabled = options.enabled ?? true

  const updateActiveSection = () => {
    if (!toValue(enabled)) return

    const line = window.innerHeight * activeLine
    const currentSection = Object.entries(sections).find(([id]) => {
      const element = document.getElementById(id)
      if (!element) return false

      const bounds = element.getBoundingClientRect()
      return bounds.top <= line && bounds.bottom > line
    })

    if (currentSection) onActiveChange?.(currentSection[1], currentSection[0])
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
  })

  watch(() => toValue(enabled), updateActiveSection)

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { updateActiveSection }
}

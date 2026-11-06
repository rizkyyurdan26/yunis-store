<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

const props = defineProps({
  /** `to` renders a RouterLink, `href` renders an anchor, otherwise a button. */
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'nav', 'footer', 'brand', 'category'].includes(value),
  },
})

const componentType = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))
const componentProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href }
  return { type: props.type }
})
</script>

<template>
  <component
    :is="componentType"
    v-bind="componentProps"
    class="inline-flex items-center justify-center gap-2 transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transform-none"
    :aria-current="active && componentType === RouterLink ? 'page' : undefined"
    :class="
      variant === 'nav'
        ? [componentType === 'button' && 'cursor-pointer', 'rounded-lg px-3 py-2 font-semibold hover:bg-espresso/10 hover:text-gold active:scale-[0.98]', active && 'bg-espresso/10 text-gold']
        : variant === 'footer'
          ? [componentType === 'button' && 'cursor-pointer', 'rounded-sm text-sm font-normal text-brown-muted hover:text-gold']
          : variant === 'category'
            ? [
                componentType === 'button' && 'cursor-pointer',
                'rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-espresso shadow-sm hover:border-gold hover:bg-cream/50 hover:text-gold active:scale-[0.98]',
                active && 'border-gold bg-cream/70 text-gold ring-1 ring-gold/20',
              ]
          : variant === 'brand'
            ? [componentType === 'button' && 'cursor-pointer', 'rounded-sm font-semibold leading-none']
          : [
            componentType === 'button' && 'cursor-pointer',
            'rounded-lg px-5 py-2 font-semibold hover:scale-[1.03] active:scale-[0.98]',
            active && 'ring-2 ring-gold/50',
            transparent
              ? 'border-2 border-border text-ivory hover:bg-white/10'
              : 'bg-espresso text-white hover:bg-brown-muted',
          ]
    "
  >
    <slot>{{ text }}</slot>
    <Icon v-if="icon" :icon="icon" aria-hidden="true" />
  </component>
</template>

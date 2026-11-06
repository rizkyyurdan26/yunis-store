<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  text: String,
  icon: String,
  transparent: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    type="button"
    :class="[
      'flex items-center gap-2 rounded-lg px-5 py-2 cursor-pointer hover:scale-110 transition duration-500 font-semibold',
      transparent ? 'border-2 border-ivory text-white' : ' bg-espresso text-white ',
    ]"
    @click="emit('click', $event)"
  >
    {{ text }} <Icon :icon="icon" />
  </button>
</template>

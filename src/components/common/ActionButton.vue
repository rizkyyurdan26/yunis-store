<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :title="title"
    :class="[
      'flex gap-2 items-center cursor-pointer text-white py-2 rounded font-semibold text-lg hover:scale-110 duration-300',
      text ? 'px-4' : 'px-2',
      color,
    ]"
    @click="$emit('click')"
  >
    <Icon v-if="icon" :icon="icon" width="20" /> <span v-if="text">{{ text }}</span>
  </component
  >
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  text: String,
  icon: String,
  to: String,
  title: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'bg-mainbg',
  },
})

defineEmits(['click'])
</script>

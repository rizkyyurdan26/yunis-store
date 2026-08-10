<template>
  <button class="cursor-pointer hover:scale-110 duration-300" @click="handleBack">
    <Icon icon="icon-park-outline:back" width="28" />
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleBack = () => {
  router.back()
}
</script>

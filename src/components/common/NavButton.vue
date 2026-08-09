<template>
  <router-link
    :to="to"
    :class="['flex items-center gap-2 hover:bg-amber-900/50 duration-500 text-white text-lg font-semibold pl-3 py-1 rounded', isActive ? 'bg-amber-900/50' : '']"
    ><Icon :icon="icon" width="24"/>{{ text }}</router-link
  >
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: String,
  text: String,
  icon: String,
  exact: {
    type: Boolean,
    default: false
  },
})

const route = useRoute()

const isActive = computed(() => {
  if (props.exact) {
    route.path === props.to
  } else {
    return route.path.startsWith(props.to)
  }
  
})
</script>

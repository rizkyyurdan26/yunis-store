<template>
  <div class="flex flex-col gap-2 w-full">
    <label class="label text-lg"
      >{{ label }} <span v-if="required" class="text-danger">*</span></label
    >
    <select
      :required="required"
      v-model="model"
      class="select outline-none text-base border-border-form"
    >
      <option v-for="item in data" :key="item.value" :value="item.value">{{ item.label }}</option>
    </select>
  </div>
</template>

<script setup>
const model = defineModel()
defineProps({
  label: String,
  data: {
    type: Array,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>

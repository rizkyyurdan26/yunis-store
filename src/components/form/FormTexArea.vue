<template>
  <div class="flex flex-col gap-2">
    <label class="label text-lg"
      >{{ label }} <span v-if="required" class="text-danger">*</span></label
    >
    <textarea :required="required" v-model="model" :placeholder="placeholder" class="textarea text-base w-full outline-none border-border-form" rows="5"></textarea>
  </div>
</template>

<script setup>
const model = defineModel()

defineProps({
  label: String,
  placeholder: String,
  required:{
    type: Boolean,
    default: false
  }
})
</script>

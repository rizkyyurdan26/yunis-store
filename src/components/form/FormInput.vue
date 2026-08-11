<template>
  <fieldset class="fieldset text-base">
    <label class="label text-lg"
      >{{ label }} <span v-if="required" class="text-danger">*</span></label
    >
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="input w-full text-base outline-none border-border-form"
      placeholder="Name"
    />
  </fieldset>
</template>

<script setup>
const model = defineModel()

defineProps({
  type: {
    type: String,
    default: 'text',
  },
  label: String,
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: String,
})
</script>

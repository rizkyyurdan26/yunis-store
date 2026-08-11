<template>
  <div class="flex flex-col gap-2">
    <label class="label text-lg">{{ label }}</label>
    <input
      type="file"
      class="file-input"
      accept=".png, .jpg, .jpeg"
      ref="fileInput"
      :multiple="multiple"
      @change="handleChange"
    />
    <label class="label">Ukuran terbaik 1:1 (max 3 file)</label>

    <div v-if="model.length" class="flex flex-wrap gap-2">
      <div v-for="(item, idx) in model" :key="idx" class="relative w-fit">
        <img :src="previewUrl(item)" class="h-25 w-25 object-cover border border-border-form p-2" />
        <button
          type="button"
          @click="handleRemove(idx)"
          class="button absolute top-0 right-0 bg-danger text-white px-2 rounded-full"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
  multiple: { type: Boolean, default: false },
})

const fileInput = ref(null)
const model = defineModel({ default: () => [] })

const previewUrl = (item) => (typeof item === 'string' ? item : URL.createObjectURL(item))

const handleChange = (event) => {
  const files = Array.from(event.target.files)

  if (!props.multiple) model.value = []

  for (const file of files) {
    if (file.size > 500 * 1024) {
      alert('Image harus <= 500 kb')
      continue
    }
    if (model.value.length >= 3) {
      alert('Maksimal gambar 3')
      continue
    }
    model.value.push(file)
  }

  fileInput.value.value = ''
}

const handleRemove = (index) => {
  const item = model.value[index]
  if (typeof item !== 'string') URL.revokeObjectURL(previewUrl(item))
  model.value.splice(index, 1)
}
</script>

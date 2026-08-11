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

    <div v-if="preview.length" class="flex flex-wrap gap-2">
      <div v-for="(item, idx) in preview" :key="idx" class="relative w-fit">
        <img :src="item" class="h-25 w-25 object-cover border p-2" />
        <button type="button" @click="handleRemove(idx)" class="button absolute top-0 right-0 bg-danger text-white px-2 rounded-full">x</button>
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
const preview = ref([])

const handleChange = (event) => {
  const files = Array.from(event.target.files)

  if (!props.multiple) {
    model.value = []
    preview.value = []
  }

  for (const file of files) {
    if (file.size > 500 * 1024) {
      alert('Image harus <= 500 kb')
      continue
    }
    model.value.push(file)
    preview.value.push(URL.createObjectURL(file))
  }

  fileInput.value.value = ''
}

const handleRemove = (index) => {
  URL.revokeObjectURL(preview.value[index])
  model.value.splice(index, 1)
  preview.value.splice(index, 1)
}
</script>
<template>
  <table class="w-full min-w-lg border-collapse">
    <thead>
      <tr class="bg-main text-white text-left">
        <th class="py-2 rounded-l px-3 border-r">No</th>
        <th v-for="col in columns" :key="col.key" class="px-3 border-r">
          {{ col.label }}
        </th>
        <th v-if="showAction" class="px-3">Aksi</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(item, index) in data"
        :key="item[keyIndex]"
        class="border-b border-border-main hover:bg-hover-border"
      >
        <td class="px-3 py-2">{{ index + 1 }}</td>
        <td v-for="col in columns" :key="col.key" class="px-3 py-2">
          {{ col.format ? col.format(item[col.key]) : item[col.key] }}
        </td>
        <td class="flex px-3 py-2 gap-3 items-center">
          <ActionButton
            icon="icon-park-solid:doc-detail"
            color="bg-brave"
            @click="$emit('detail', item[keyIndex])"
            title="Detail"
          />
          <ActionButton
            icon="mdi:edit"
            color="bg-warning"
            @click="$emit('update', item)"
            title="Update"
          />
          <ActionButton
            icon="icon-park-solid:delete"
            color="bg-danger"
            @click="$emit('delete', item)"
            title="Delete"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import ActionButton from '../common/ActionButton.vue'

defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  keyIndex: String,
  showAction: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['detail', 'update', 'delete'])
</script>

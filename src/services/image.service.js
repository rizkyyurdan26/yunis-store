import api from '@/services/api'

export const imageService = (bucket) => {
  return {
    async upload(files) {
      if (!files) return []

      const fileList = Array.isArray(files) ? files : [files]
      if (!fileList.length) return []

      const urls = []

      for (const file of fileList) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Date.now()}-${fileExt}`

        await api.post(`/storage/v1/object/${bucket}/${fileName}`, file, {
          headers: { 'Content-Type': file.type },
        })

        urls.push(`${api.defaults.baseURL}/storage/v1/object/public/${bucket}/${fileName}`)
      }

      return urls
    },

    async remove(urls) {
      if (!urls) return

      const urlList = Array.isArray(urls) ? urls : [urls]
      if (!urlList.length) return

      const fileNames = urlList.map((url) => url.split(`/${bucket}/`).pop())

      await api.delete(`/storage/v1/object/${bucket}`, {
        data: { prefixes: fileNames },
      })
    },
  }
}
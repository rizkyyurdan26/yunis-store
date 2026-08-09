export const useCurrency = (num) => {
  return Number(num).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
}

const files = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const images = Object.entries(files)
  .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true }))
  .map(([, src]) => src)

export default images
<template>
  <div>
    <canvas ref="qrcodeCanvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const qrcodeData = 'https://example.com/social-links' // Посилання на сторінку з лінками на соціальні мережі
    const canvas = this.$refs.qrcodeCanvas

    this.$qrcode.toCanvas(canvas, qrcodeData, (error) => {
      if (error) {
        console.error('Помилка при генерації QR-коду:', error)
      }
    })
  }
}
</script>

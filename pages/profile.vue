<template>
  <div class="flex flex-column align-start align-self-start justify-start">
    <h1>Profile</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum omnis rem eum quo, quia accusamus totam dolorem veritatis voluptatum.</p>
    <v-btn @click="$router.push('/')">Home</v-btn>
    <canvas ref="qrcodeCanvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const qrcodeData = 'https://github.com/AlexVRBK' // Посилання або дані, що ви хочете закодувати у QR-код
    const canvas = this.$refs.qrcodeCanvas

    this.$qrcode.toCanvas(canvas, qrcodeData, (error) => {
      if (error) {
        console.error('Помилка при генерації QR-коду:', error)
      }
    })
  }
}
</script>









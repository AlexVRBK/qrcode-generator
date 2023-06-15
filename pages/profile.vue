<template>
  <div class="container">
    <div class="flex flex-column align-start align-self-start justify-start">
      <div>
        <h1>Profile</h1>
        <p class="email">
          You are now logged in <span class="email-span">{{ $nuxt.$fire.auth.currentUser.email }}</span>
        </p>
      </div>
      
      <div class="button-group">
        <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
      </div>
     <v-btn  class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-2 mr-2 text-white"
    color="emerald"
    dark
    large
    style="background-color: rgb(5, 150, 105, 0.8)" 
    @click="$router.push('/social')" >Social</v-btn>
      <!-- <canvas ref="qrcodeCanvas"></canvas> -->
      <Card />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  components: {
    Card
  },
  // mounted() {
  //   const qrcodeData = 'https://github.com/AlexVRBK' // Посилання або дані, що ви хочете закодувати у QR-код
  //   const canvas = this.$refs.qrcodeCanvas

  //   this.$qrcode.toCanvas(canvas, qrcodeData, (error) => {
  //     if (error) {
  //       console.error('Помилка при генерації QR-коду:', error)
  //     }
  //   })
  // }
}
</script>

<style scoped>


.email-span {
  color: rgb(5, 150, 105);
}

.button-group {
  margin-top: 16px;
  margin-bottom: 46px;
  text-align: right;
}
</style>







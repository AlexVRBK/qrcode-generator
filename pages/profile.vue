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
    @click="$router.push('/social')" >GitHub</v-btn>
    <v-btn
      class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-2 mr-2 text-white"
      color="emerald"
      dark
      large
      style="background-color: rgb(5, 150, 105, 0.8)"
      @click="scrollToCardGenerator">
      Create Card
    </v-btn>
      <!-- <canvas ref="qrcodeCanvas"></canvas> -->
      <div class="card_wrapper">
        <div>
          <CardThree />
        </div>
        <div>
          <CardFour />
        </div>
      </div>
      
      <CardTwo />

      <div class="cardgenerator_wrapper" id="cardgenerator">
        <CardGeneratorVue />
      </div>

    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import CardTwo from '@/components/CardTwo.vue';
import CardThree from '@/components/CardThree.vue';
import CardFour from '@/components/CardFour.vue';
import CardGeneratorVue from '@/components/CardGenerator.vue';

export default {
  components: {
    Card,
    CardTwo,
    CardThree,
    CardFour,
    CardGeneratorVue
  },
  methods: {
    scrollToCardGenerator() {
      const element = document.getElementById('cardgenerator');
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
}
</script>

<style scoped>
.bizcard_image{
  width: 100px;
  height: 200px;
}

.email-span {
  color: rgb(5, 150, 105);
}

.button-group {
  margin-top: 16px;
  margin-bottom: 46px;
  text-align: right;
}

.card_wrapper{
  display: flex;
  justify-content: space-around;
  margin: 50px;
}

.cardgenerator_wrapper{
  margin-top: 100px;
  background: rgb(5, 150, 105);
}
</style>







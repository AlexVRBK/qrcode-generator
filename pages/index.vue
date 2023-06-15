<template>
  <div class="container">
   <div class="image-container" style="display: flex; justify-content: space-between; align-items: center;">
    
    <div>
      <img src="@/static/icon_384.png" alt="" class="main_image">
    </div>
   <div class="main_btn">
    <div>
      <img src="@/assets/images/symbo.png" alt="" class="small-image">
    </div>
    <div>
      <v-btn v-if="authenticated"
      style="background: rgb(55, 65, 81);"
       @click="$router.push('/auth/signout')">Logout</v-btn>
      <v-btn v-else 
      style="background: rgb(55, 65, 81);"
      @click="$router.push('/auth/signin')">Sign In</v-btn>
    </div>
  </div>
  </div>
    <div class="text-container">
      <h1>Why Pay When Your Website Can Host Your Digital Business Cards for Free!</h1>
      <h2>EnBizCard helps you create beautiful, responsive HTML‑based digital business cards that can be hosted on your website.</h2>
      <div>
        <ul class="text-gray-400">
          <li>No sign-up required</li>
          <li>100% free and open-source</li>
          <li>No user tracking and data collection</li>
          <li>Works offline</li>
        </ul>
      </div>
    </div>
    <Card />
     <div class="text-container">
      <v-btn
    class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-2 mr-2 text-white"
    color="emerald"
    dark
    
    large
    style="background-color: rgb(5, 150, 105, 0.8)"
    @click="$router.push('/profile')"
  >
    Create your own
  </v-btn>
       <v-btn
    class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-2 mr-2 text-white"
    @click="$router.push('/auth/signin')"
    large
    style="background: rgb(55, 65, 81);"
  >
    View demo
  </v-btn>
   <p class="text-container_descr">Read the <span class="link_descr" @click="redirectToGuide">Hosting Guide</span></p>
    </div>
    <div class="descr_telegram">
      <h3>
        Having issues, suggestions and feedback?
      </h3>
       <v-btn
    class="font-extrabold leading-none text-lg tracking-wide select-none shrink-0 p-5 mt-6 mr-2 text-white"
    @click="$router.push('/auth/signin')"
    large
    style="background: rgb(55, 65, 81);"
  >
    Join the Telegram group
  </v-btn>
    </div>
    <div class="footer">
    <img src="@/static/icon_384.png" class="logo" alt="Логотип" height="32px" />
    <h1 class="logo-text">EnBizCard</h1>
  </div>
  </div>
</template>


<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
   methods: {
    redirectToGuide() {
      this.$router.push('/guide'); 
    },
  },
  computed: {
    authenticated() {
      return this.$fire.auth.currentUser !== null;
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.main_image{
  width: 400px;
  padding: 15px 0px 30px;
}

.main_btn{
margin-right: 50px;
margin-bottom: 50px;
}

.small-image {
  width: 70px; 
  height: auto;
  margin-bottom: 10px;
  margin-left: 12px; 
  background-color: transparent; 
}

.text-container{
  margin-top: 50px;
  max-width: 1100px;
  margin: 0 auto;
  h2{
    margin-top: 20px;
    margin-bottom: 30px;
  }
  ul.text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }
}

.link_descr {
  color:  rgb(5 150 105);
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
}

.text-container_descr{
  color: rgb(243 244 246);
      margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-top: 25px;
}

.descr_telegram{
  margin-top: 100px;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 100px;
  bottom: 0;
  left: 0;
  width: 100%;
}

.logo {
  width: 50px;
  height: 50px;
}

.logo-text {
  margin-top: 10px;
  font-size: 24px;
  color: white;
  text-align: center;
}
</style>

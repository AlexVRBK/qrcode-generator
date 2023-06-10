<template>
  <div class="container">
    <div class="image-container">
      <img src="@/static/icon_384.png" alt="">
    </div>
    <div class="text-container">
      <h1>Why Pay When Your Website Can Host Your Digital Business Cards for Free!</h1>
      <h2>EnBizCard helps you create beautiful, responsive HTML‑based digital business cards that can be hosted on your website.</h2>
      <div>
        <ul>
          <li>No sign-up required</li>
          <li>100% free and open-source</li>
          <li>No user tracking and data collection</li>
          <li>Works offline</li>
        </ul>
      </div>
    </div>
    <v-btn v-if="authenticated" @click="$router.push('/auth/signout')">Logout</v-btn>
    <v-btn v-else @click="$router.push('/auth/signin')">Sign In</v-btn>
    <v-btn @click="$router.push('/profile')">Profile</v-btn>
    <v-btn @click="$router.push('/info')">Info</v-btn>
    <Card />
  </div>
</template>


<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  computed: {
    authenticated() {
      return this.$fire.auth.currentUser !== null;
    },
  },
};
</script>

<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}
</style>

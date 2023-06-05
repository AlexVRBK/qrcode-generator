<template>
  <div class="flex flex-column align-start align-self-start justify-start">
    <img src="@/static/icon_384.png" alt="" >
    <h1>Welcome to your dashboard</h1>
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
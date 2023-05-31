<template>
  <div class="flex flex-column align-start align-self-start justify-start">
    <h1>Welcome to your dashboard</h1>
    <v-btn v-if="authenticated" @click="$router.push('/auth/signout')">Logout</v-btn>
    <v-btn v-else @click="$router.push('/auth/signin')">Sign In</v-btn>
     <v-btn @click="$router.push('/profile')">Profile</v-btn>
     <v-btn @click="$router.push('/info')">Info</v-btn>
  </div>
</template>
<script>
export default {
  computed: {
    authenticated() {
      return this.$fire.auth.currentUser !== null;
    },
  },
};
</script>
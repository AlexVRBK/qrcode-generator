<template>
  <v-app>
    <v-main style="background-color: rgb(17, 24, 39 )">
      <v-container>
        <Header />
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>

<template>
  <v-toolbar :class="{ 'transparent': isToolbarTransparent }" fixed style="background: rgb(55, 65, 81);">
    <v-toolbar-title>
      <v-btn to="/" text class="no-active-link">
        <img src="@/static/icon_384.png" alt="Логотип" height="32px" />
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/profile" text class="no-active-link">Profile</v-btn>
      <v-btn to="/info" text class="no-active-link">Info</v-btn>
      <v-btn text class="no-active-link">Donate</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      isToolbarTransparent: true,
      prevScrollPos: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > this.prevScrollPos) {
        this.isToolbarTransparent = false;
      } else {
        this.isToolbarTransparent = true;
      }
      this.prevScrollPos = currentScrollPos;
    },
    redirectTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.v-toolbar {
  position: sticky;
  top: 0;
  z-index: 999;
  transition: background-color 0.3s;
}

.transparent {
  background-color: transparent !important;
}

.no-active-link {
  color: inherit !important;
  text-decoration: none !important;
}
</style>

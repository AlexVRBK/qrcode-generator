<template>
  <v-app>
    <v-main>
      <v-container>
        <v-toolbar :class="{ 'transparent': isToolbarTransparent }" fixed>
          <v-toolbar-title>
            <v-btn to="/" text class="no-active-link">
              <img src="@/static/icon_384.png" alt="Логотип" height="32px" />
            </v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn v-if="!isAuthenticated" to="/auth/signin" text class="no-active-link">Реєстрація</v-btn>
            <v-btn v-if="isAuthenticated" @click="logout" text class="no-active-link">Вийти</v-btn>
            <v-btn to="/profile" text class="no-active-link">Профіль</v-btn>
            <v-btn to="/info" text class="no-active-link">Інфо</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isToolbarTransparent: true,
      prevScrollPos: 0,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    },
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
        // Прокручування донизу - тулбар стає непрозорим
        this.isToolbarTransparent = false;
      } else {
        // Прокручування вгору - тулбар стає прозорим
        this.isToolbarTransparent = true;
      }
      this.prevScrollPos = currentScrollPos;
    },
    logout() {
      // Додайте логіку для виходу користувача
      this.$store.dispatch('auth/logout');
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

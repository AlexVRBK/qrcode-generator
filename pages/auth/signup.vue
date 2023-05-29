<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card width="500" class="elevation-4 text-left" shaped color="yellow">
        <v-card-title>Register</v-card-title>
        <v-card-subtitle>Register a new account</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              v-model="auth.email"
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="auth.password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="register-button"
            @click="register"
            depressed
            large
          >
            Register
          </v-btn>
          <v-btn
            class="login-link-button"
            @click="goToLogin"
            text
            color="primary"
          >
            У мене є аккаунт
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          email: this.auth.email,
          password: this.auth.password
        })
        .then(() => {
          // Реєстрація успішна
          this.snackbarText = 'Реєстрація успішна';
          this.snackbar = true;
          this.$router.push('/'); // Редирект на домашню сторінку
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.snackbarText = 'Користувач з такою електронною адресою вже зареєстрований';
          } else {
            this.snackbarText = error.message;
          }
          this.snackbar = true;
        });
    },
    goToLogin() {
      this.$router.push('/auth/signin'); // Редирект на сторінку авторизації
    }
  }
}
</script>

<style>
/* Ваші стилі */
</style>

<template>
  <v-card width="500" class="mx-auto mt-15 pa-8">
    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex shrink>
          <v-img
            width="50"
            src="https://res.cloudinary.com/dlj52djyk/image/upload/v1626816790/pstottqvz1y1xxgxyocw.png"
          >
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <v-card-title class="justify-center">Login</v-card-title>
    <v-alert v-if="error" type="error"> {{ error }} </v-alert>

    <v-form ref="login">
      <v-card-text>
        <v-text-field
          required
          v-model="username"
          outlined
          label="Email"
          prepend-icon="mdi-account-circle"
          :rules="inputRules"
        />
        <v-text-field
          v-model="password"
          :type="show ? 'text' : 'password'"
          outlined
          label="Password"
          prepend-icon="mdi-lock"
          :rules="inputRules"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="handleLogin" class="deep-purple accent-4" dark
          >Log in</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "login",

  data: () => ({
    username: "",
    password: "",
    show: true,
    inputRules: [(value) => value.length > 0 || "This field is required"],
    error: null,
  }),
  methods: {
    async handleLogin() {
      if (!this.$refs.login.validate()) return;
      try {
        const response = await axios.post("login", {
          username: this.username,
          password: this.password,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/products");
        }
      } catch (error) {
        console.error(error);
        this.error = "Email/Username or password incorrect"
      }
    },
  },
};
</script>
<style scoped>
</style>
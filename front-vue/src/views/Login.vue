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
    <v-card-text>
      <v-text-field
        required
        v-model="username"
        outlined
        label="email"
        prepend-icon="mdi-account-circle"
      />
      <v-text-field
        v-model="password"
        outlined
        label="password"
        prepend-icon="mdi-lock"
      />
    </v-card-text>
    <v-card-actions>
      <v-checkbox
        v-model="checkbox"
        :label="`Remember me`"
        class="mr-3"
      ></v-checkbox>
      <v-spacer></v-spacer>
      <v-btn @click="handleLogin" class="deep-purple accent-4" dark
        >Log in</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "login",

  data: () => ({
    username: "",
    password: "",
    checkbox: false,
  }),
  methods: {
    async handleLogin() {
      const response = await axios.post("login", {
        username: this.username,
        password: this.password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        this.$router.push("/products");
      }
    },
  },
};
</script>
<style scoped>
</style>
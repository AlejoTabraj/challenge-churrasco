<template>

      <v-card width="300" class="mx-auto mt-15">
          <v-card-title>Login</v-card-title>    
          <v-card-text>
            <v-text-field v-model="username" outlined label="email" prepend-icon="mdi-account-circle"/>
            <v-text-field v-model="password" outlined label="email" prepend-icon="mdi-lock"/>
          </v-card-text>
          <v-card-actions>
            <v-checkbox  v-model="checkbox" :label="`Checkbox`" class="mr-3"></v-checkbox>
            <v-spacer></v-spacer>
            <v-btn @click="handleLogin">Log in</v-btn>
          </v-card-actions>
      </v-card>

</template>

<script>
import axios from 'axios'

export default {
  name: 'login',

  data: () => ({
    username: '',
    password: '',
    checkbox: false
  }),
  methods: {
    async handleLogin(){
      const response = await axios.post('login',{
        username: this.username,
        password: this.password
      })
      if(response.status === 200){
        localStorage.setItem('token', response.data.token)
        this.$router.push('/products')
      }
      
    }

  },
};
</script>
<style scoped>

</style>
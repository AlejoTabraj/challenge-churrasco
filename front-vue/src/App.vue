<template>
  <v-app >
   <!-- <v-app-bar
      app
      color="primary"      
      dark
    >
    <v-toolbar-title>CHURRASCO</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>ADD PRODUCT</v-btn>
    </v-app-bar>-->
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style scoped>

</style>
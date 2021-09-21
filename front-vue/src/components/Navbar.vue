<template>
  <v-app-bar app dark class="deep-purple accent-4">
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn router :to="route" text>{{ routeName }}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  props: ["title", "route", "routeName"],
};
</script>
<style scoped>
</style>
<template>
  <v-card class="mx-auto my-12" max-width="300">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="product.pictures[0]"></v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      <v-row class="mx-0">
        <div class="grey--text">SKU: {{ product.SKU }}</div>
      </v-row>
      <v-row class="mx-0">
        <div class="grey--text">CODE: {{ product.code }}</div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        {{ product.currency }} {{ product.price }}
      </div>

      <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "card",
  props: ["product"],
};
</script>
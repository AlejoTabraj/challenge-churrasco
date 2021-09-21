<template>
  <v-card outLined class="pa-10">
    <navbar
      title="LIST OF PRODUCTS CHURRASCO"
      route="./addproduct"
      routeName="ADD PRODUCT"
    />
    <v-row>
      <v-col
        v-for="(product, index) in productsList"
        v-bind:key="index"
        cols="12"
        md="4"
        sm="6"
      >
        <card v-bind:product="product" />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import axios from "axios";

export default {
  name: "products",

  data() {
    return {
      productsList: null,
    };
  },

  components: {
    Navbar,
    Card,
  },

  async created() {
    const response = await axios.get("products");
    this.productsList = response.data;
  },
};
</script>
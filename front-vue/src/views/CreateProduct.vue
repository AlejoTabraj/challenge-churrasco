<template>
  <v-card class="grey lighten-5 pa-10">
    <navbar title="ADD PRODUCT" route="/products" routeName="PRODUCTS" />
    <product-form />
  </v-card>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProductForm from "../components/ProductForm.vue";

export default {
  name: "createProduct",
  components: {
    Navbar,
    ProductForm,
  },
};
</script>

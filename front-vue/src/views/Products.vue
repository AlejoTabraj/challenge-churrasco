<template>
  <div class="about">
    <navbar />
    <card v-for="(product, index) in productsList" v-bind:product="product" v-bind:key="index" />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import axios from'axios'

export default {
  name: 'products',

  data() {
    return {
      productsList: null,
    }
  },

  components:{
    Navbar,
    Card,
  },

  async created() {
    const response = await axios.get('products')
    this.productsList = response.data
  },
}
</script>
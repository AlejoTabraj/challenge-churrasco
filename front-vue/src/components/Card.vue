<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="product.pictures[0]"
    ></v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >

        <div class="grey--text ms-4">
        SKU: {{ product.SKU }}
        </div>
        <div class="grey--text ms-4">
        CODE: {{ product.code }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{product.currency}} {{product.price}}
      </div>

      <div>{{product.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'card',
    props: ['product']
    
}
</script>
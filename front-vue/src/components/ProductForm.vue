<template>
  <v-card outLined width="600" class="mx-auto pa-6">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field label="SKU" v-model="SKU" outlined></v-text-field>
      <v-text-field label="Name" v-model="name" outlined></v-text-field>
      <v-text-field
        label="Images (separed by spaces)"
        v-model="pictures"
        outlined
      ></v-text-field>
      <v-text-field label="Price" outlined></v-text-field>
      <v-text-field label="Currency" v-model="currency" outlined></v-text-field>
      <v-text-field label="Code" v-model="code" outlined></v-text-field>
      <v-text-field
        label="Description"
        v-model="description"
        outlined
      ></v-text-field>
      <div>
        <v-space></v-space>
        <v-btn color="error" @click="reset" class="red darken-4 mr-4">
          RESET FORM
        </v-btn>

        <v-btn
          color="warning"
          @click="resetValidation"
          class="deep-purple accent-4"
        >
          SEND PRODUCT
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "product-form",
  data() {
    return {
      SKU: "",
      name: "",
      pictures: "",
      price: "",
      currency: "",
      code: "",
      description: "",
    };
  },
};
</script>
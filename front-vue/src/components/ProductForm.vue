<template>
  <v-card outLined width="600" class="mx-auto pa-6">
    <v-form ref="form" lazy-validation>
      <v-text-field
        :rules="inputRules"
        label="SKU"
        v-model="SKU"
        outlined
      ></v-text-field>
      <v-text-field
        :rules="inputRules"
        label="Name"
        v-model="name"
        outlined
      ></v-text-field>
      <v-text-field
        :rules="inputRules"
        label="Images (separed by spaces)"
        v-model="pictures"
        outlined
      ></v-text-field>
      <v-text-field
        :rules="inputNumber"
        v-model="price"
        label="Price"
        outlined
      ></v-text-field>
      <v-text-field
        :rules="inputRules"
        label="Currency"
        v-model="currency"
        outlined
      ></v-text-field>
      <v-text-field
        label="Code"
        :rules="inputNumberOptional"
        v-model="code"
        outlined
      ></v-text-field>
      <v-text-field
        label="Description"
        v-model="description"
        outlined
      ></v-text-field>

      <v-btn color="error" @click="resetForm" class="red darken-4 mr-4">
        RESET FORM
      </v-btn>

      <v-btn color="warning" @click="postProduct" class="deep-purple accent-4">
        SEND PRODUCT
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";

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
      inputRules: [
        (value) => value?.length > 0 || "This field is required",
        (value) => isNaN(+value) || "Must to be a string",
      ],
      inputNumber: [
        (value) => value?.length > 0 || "This field is required",
        (value) => !isNaN(+value) || "Must to be a number",
      ],
      inputNumberOptional: [(value) => !isNaN(+value) || "Must to be a number"],
    };
  },
  methods: {
    async postProduct() {
      if (!this.$refs.form.validate()) return;
      const product = this;
      try {
        const response = await axios.post("addproduct", {
          SKU: +product.SKU,
          name: product.name,
          pictures: product.pictures.split(" "),
          price: +product.price,
          currency: product.currency,
          code: +product.code,
          description: product.description,
        });
        if (response.status === 201) {
          console.log(response);
          this.$refs.form.reset();
        }
      } catch (error) {
        console.error(error);
      }
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
<template>
  <div>
    <productsBar />
    <productDiscountBar />
  </div>
</template>

<script>
import productsBar from "./productsBar.vue";
import productDiscountBar from "./productDiscountBar.vue";

export default {
  components: {
    productsBar,
    productDiscountBar,
  },
};
</script>

<style lang="sass" scoped></style>

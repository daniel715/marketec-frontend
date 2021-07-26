<template>
  <div id="container">
    <div id="title">
      <h1>Aprovecha!</h1>
    </div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-card class="b-card">
        <b-card-group>
          <div class="product-container">
            <product />
            <div class="discount-label">
              <discountLabel />
            </div>
          </div>
        </b-card-group>
      </b-card>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import product from "./product.vue";
import discountLabel from "./discountLabel.vue";

export default Vue.extend({
  components: {
    product,
    discountLabel,
  },
});
</script>

<style lang="sass" scoped>
#container
  background-color: white
  color: #F6874F

#title
  max-width: 0
  margin-left: 20px

.product-container
  position: relative

.discount-label
  position: absolute
  top: 0
  right: 0

.b-card
  background-color: #F6874F

</style>

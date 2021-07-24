<template>
  <div id="container">
    <div id="title">
      <h1>Aprovecha</h1>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-card class="b-card">
        <b-card-group>
          <div class="product-container">
            <products />
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
import products from "./products.vue";
import discountLabel from "./discountLabel.vue";

export default Vue.extend({
  components: {
    products,
    discountLabel,
  },
});
</script>

<style lang="sass" scoped>
#container
  color: orange
  background-color: white
.product-container
  position: relative;
.discount-label
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
</style>

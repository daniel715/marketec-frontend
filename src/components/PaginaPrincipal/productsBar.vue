<template>
  <div>
    <b-card class="b-card">
      <b-tabs card>
        <b-tab title="Tuberculos" active>
            <b-card-group>
              <product />
            </b-card-group>
        </b-tab>
        <b-tab title="Carnes">
           <b-card-group>
              <products />
            </b-card-group>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import product from "./product.vue";

export default Vue.extend({
  components: {
    product,
  },
});
</script>
<style lang="sass" scoped>
.b-card
</style>
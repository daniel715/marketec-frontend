<template>
  <div>
    <b-card class="b-card">
      <b-tabs card>
        <b-tab title="Tab 1" active>
            <b-card-group>
              <products />
            </b-card-group>
        </b-tab>
        <b-tab title="Tab 2">
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
import products from "./products.vue";

export default Vue.extend({
  components: {
    products,
  },
});
</script>
<style lang="sass">
.b-card
</style>
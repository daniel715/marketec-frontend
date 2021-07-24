<template>
  <div>
    <b-card class="b-card">
      <b-tabs card>
        <b-tab title="Tab 1" active>
            <b-card-group>
                <div class="father">
                    <products />
                    <div class="son">
                        <discountLabel/>
                    </div>
                </div>
            </b-card-group>
        </b-tab>
        <b-tab title="Tab 2">
            <h1> tab de prueba, aqui ira la demas data</h1>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import products from "./products.vue";
import discountLabel from './discountLabel.vue';

export default Vue.extend({
  components: {
    products,
    discountLabel
  },
});
</script>
<style lang="sass" scoped>
.father
    position: relative;
.son
    position: absolute;
    top: 0;
    right: 0;
</style>
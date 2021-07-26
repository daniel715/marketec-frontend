<template>
  <div id="container">
    <div id="father">
      <div>
        <b-card
          title="Tienda de Pepito"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJ97qDP5OLQVRLUYwd9LINyV2PhZYQNI_sg&usqp=CAU"
          img-alt="Image"
          img-top
          style="max-width: 11rem;"
          tag="article"
          class="mb-2"
        >
        <div>
            <storeRating/>
        </div>

        <div id="options">
          <b-button class="option" href="#" variant="primary">Historia</b-button>
          <b-button class="option" href="#" variant="primary">Productos</b-button>
          <b-button class="option" href="#" variant="primary">Contacto</b-button>
        </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
import storeRating from "./storeRating.vue"

@Component({
    components:{
        storeRating
    }
})

export default class featuredStore extends vue {}
</script>

<style lang="sass" scoped>
#container
  width: 600px
#options
  display: flex
  justify-content: space-between
.option
  font-size: 5px
  margin: 0
  width: 50px
  padding: 0
  background: #F6874F
  border: 0

</style>

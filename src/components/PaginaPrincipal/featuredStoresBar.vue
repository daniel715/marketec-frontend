<template>
  <div id="container">
    <div id="father">
      <div>
        <div id="title">
          <h1>LAS DESTACADAS</h1>
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
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw0NDQ8NDQ0NDQ0NDQ0NDQ8NDw0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0PEisZFRkrKysrKysrKysrKystKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKwBJgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQACAAQHAAAAAAAAAAAAAAERIQJBgfEiMVFhcbHw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4gAAAlvlrr6KAAAAJICgAAAAAAAAAAAAAAAM8XFZeHEtluLczw6tzfrq0AAAAAAAAAAAAAAAAAAAAAAAAAAAAACZ7qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJfZQAAAAAgAAAAAAAAAAAAAAAAAACfvlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAJYCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARQAAAAAAAAAAAAEwoAAAACSqAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXPLW5yzrKgAAAAAAAAAAAAAAAmFAAAAAAAABKoAAAAA//Z"
            background="white"
          >
            <featured-store />
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
import featuredStore from "./featuredStore.vue";

@Component({
  components: {
    featuredStore,
  },
})
export default class featuredStoresBar extends vue {
  slide: number = 0;
  sliding: boolean = true;

  onSlideStart(slide: any): void {
    this.sliding = true;
  }
  onSlideEnd(slide: any): void {
    this.sliding = false;
  }
}
</script>

<style lang="sass" scoped>
#container
  background: white
#title
  color: #F6874F
</style>

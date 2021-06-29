<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <InicioSesion/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InicioSesion from '@/components/Login/InicioSesion.vue';

@Component({
  components: {
    InicioSesion
  },
})
export default class Home extends Vue {}
</script>

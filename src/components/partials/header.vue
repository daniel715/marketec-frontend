<template>
    <div id="container">
        <div id="father">
            <div id="title">
                <h1>MARKETEC</h1>
            </div>
            <div>
                <b-col class="pb-2"><b-button class="btn_login" size="lg">Iniciar Sesion</b-button></b-col>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<style lang="sass" scoped>
#container
    background: white;
    padding: 20px;
    width: 100%
    border-bottom: solid 1px black
#father
    display: flex
    flex-direction: row
    justify-content: space-between;
#title
    color: orange
.btn_login
    background-color: orange
    border: 0px

</style>
<template>
  <div id="container">
    <div id="father">
      <div>
        <h1>QUE SE TE ANTOJA?</h1>
      </div>
      <div>
        <b-input-group>
          <b-form-input
            class="searchInput"
            size="lg"
            placeholder="Ingrese Producto"
          ></b-form-input>
          <b-input-group-prepend>
            <button class="input-group-text">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="sass" scoped>
#container
    background-color: white
    padding: 20px
    color: orange
    display: flex
    justify-content: center
#father
  width: 80%
.input-group-text
  color: orange
  border-left: none;
  background-color: #ffffff;

.searchInput
  border-right: none;

</style>

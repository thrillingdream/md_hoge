<template>
  <div id="app">
    <img src="./assets/thrillingdream.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("~@/assets/logo.png");
  background-color: #00FF00;
}
* {
    margin: 0px;
    padding: 0px;
}
</style>

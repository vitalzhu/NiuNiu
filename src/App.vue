<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    height: 100%;
    padding: 0px;
    margin: 0px;
    border: 0px;
  }
  body{
    height: 100%;
    width: 100%;
    background-image: url('./assets/p4.png');
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:right top;
    padding: 0px;
    margin: 0px;
    border: 0px;
    position: fixed;
    top: 0px;
    left: 0px;

  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 20px; */
    width: 100%;
    height: 100%;
    overflow:visible;
    padding: 0px;
    margin: 0px;
    border: 0px;
  }
</style>

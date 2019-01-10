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
@media screen and (max-width: 1200px){
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    width: 350px;
    height: 600px;
    overflow-y: scroll;
    background-image: url('./assets/P4.png');
    /* border: 1px solid red */

  }
}


@media screen and (max-width: 500px){
  body{
    background-image: url('./assets/P4.png');
    
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    overflow:visible;

  }
}
</style>

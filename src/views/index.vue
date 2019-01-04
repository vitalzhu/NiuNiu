<template>
  <div class="page-lazyload">
    <h1 class="page-title">{{ topContext }}</h1>
    <div class ="page-button">
      <button id="button" v-on:click = "clickCover"> 
        <img src = "../assets/homecover.jpg" height="420" width="300" slot="icon">
      </button>
    </div>

    <h2 class="page-bottom">{{ bottomContext }}</h2>
  </div>
  
</template>

<style>
    #button{
        margin: 0px;
        padding: 0px;
        border: 1px solid transparent;
        outline: none;
        background-color: white;
    }
</style>


<script>

  

  export default{
    data(){
      return{
        topContext: 'ECOW iWORDs',
        bottomContext: '特别定制版'
      }
    },

    methods: {
      clickCover: function() {
        this.$router.push("/unitPage")
      }
    },
  }

</script>

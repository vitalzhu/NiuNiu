<template>
  <div id="page">
      <div style="height:60%">
        <h1 id = "pagetitle">{{ title }}</h1>
        <button id="coverbutton" v-on:click = "clickCover"> 
          <img src = "../assets/homecover.jpg" height="260" width="200" slot="icon" style="margin-bottom:10px;margin-right:10px">
        </button>
      </div>
      <h4 id="level">{{level}}</h4>
      <footer id="coverfooter">{{ bottomContext }}</footer>
  </div>
</template>

<style scope="this api replaced by slot-scope in 2.5.0+">
    #coverbutton{
        margin: 0px;
        padding: 10px;
        border: 1px solid transparent;
        outline: none;
        background-color: rgba(255, 255, 255, 0);
        background-image: url('.././assets/imgBtnBg.png');
        background-size: 100% 100%;
        background-repeat:no-repeat;
        background-position:right top;
        position: relative;
        top: 90px;
    }

    #pagetitle{
      position: relative;
      top: 80px;
    }

    #page{
      height: 100%;
      background-image: url('.././assets/homebg.png');
      background-repeat:no-repeat;
      background-size: cover;
      background-position:right top;
      border: 1px solid rgba(255, 0, 0, 0);
    }


    #coverfooter{
      position: fixed;
      top: 97%;
      color: white;
      text-align: center;
      width: 100%;
    }

    #level{
        color: white;
        margin: 6px;
        background-image: url('.././assets/p1bg.png');
        background-size: 40% 100%;
        background-repeat:no-repeat;
        background-position-x: center;
    }
    
</style>


<script>

  

  export default{
    data(){
      return{
        title: 'ECOW iWORDs',
        bottomContext: '特别定制版',
        level:'七年级'
      }
    },

    methods: {
      clickCover: function() {
        this.$router.push("/unitPage")
      }
    },
  }

</script>

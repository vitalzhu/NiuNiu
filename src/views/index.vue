<template>
  <div id="page">
      <div style="height:60%">
        <h1 id = "pagetitle">{{ title }}</h1>
        <button id="coverbutton" v-on:click = "clickCover"> 
          <img src = "../assets/homecover.png" height="260" width="200" slot="icon" style="margin-bottom:10px;margin-right:10px">
        </button>
        <h4 id="grade">{{grade}}</h4>
      </div>

      <div id="coverfooter">{{ bottomContext }}</div>
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
        margin-top: 20%;
    }

    #pagetitle{
      position: relative;
      top: 80px;
    }

    #page{
      height: 100%;
      width: 100%;
      background-image: url('.././assets/homebg.png');
      background-repeat:no-repeat;
      background-size: 100% 100%;
      background-position:right top;
      position: fixed;
      top:0px;
      left: 0px;
    }


    #coverfooter{
      position: fixed;
      top: 97%;
      color: white;
      text-align: center;
      width: 100%;
    }

    #grade{
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
        grade:'七年级'
      }
    },

    methods: {
      clickCover: function() {
        this.$router.push("/unitPage")
      }
    },
  }

</script>

<template>
  <div id="page">
    <mt-header title="">
      <router-link to="/unitPage" slot="left">
        <mt-button>
          <img src=".././assets/back.png" width="24px" height="24px" alt="">
        </mt-button>
      </router-link>
    </mt-header>
    <h6 id="tip">{{ tip }}</h6>
    <div id="wordContainer">
      <div id = "wordwrapper" v-for="word in wordlist" :key="word.name">
        <button id = "wordButton" @click="onClickWord(word.name)">
            {{word.name}}       
        </button>
        <hr id="bottomline">
      </div>
    </div>

  </div>
</template>

<style scope>
    #wordButton{
        margin: 0px;
        width: 100%;
        height: 40px;
        padding-left: 18px;
        border: 1px solid transparent;
        outline: none;
        background-color: rgb(255, 255, 255);
        text-align: left;
    }

    #page{
      height: 100%;
      overflow: scroll;
    }

    #tip{
      margin: 0px;
      margin-bottom: 6px;
      text-align: left;
      width: 90%;
      position: relative;
      left: 5%;
      color: rgb(189, 180, 180);
    }
    #wordContainer{
      width: 90%;
      height: 86%;
      background-color: rgb(255, 255, 255);
      position: relative;
      left: 5%;
      box-shadow: 0px 1px 2px rgb(138, 134, 134);
    }

    #bottomline{
      margin:0px;
      margin-left:2px;
      width:98%;
      color:rgba(136, 134, 134, 0.747);
    }

    .mint-button-text{
      color: rgb(14, 13, 13);
    }
    .mint-header{
      background-color: rgba(255, 255, 255, 0);
    }
    
</style>

<script>
export default {
  name: 'page-navbar',

  methods:{
      onClickWord(word){
        console.log(word)
        this.$router.push({name:"wordpage",query:{selectedword:word}})
      }
  },
  data() {
    return {
      selected : '1',
      tip:'(点击词汇开始记忆)',
      wordlist: [
        { name: 'Always'},
        { name: 'Apple'},
        { name: 'Pencil'},
        { name: 'Box'},
      ]
    };
  },

  created(){
    var lesson = this.$route.params.selectedlesson
    this.$http.get('static/datas/words.json').then(res=>{
            var datas = res.body['words']
            if(datas.length>0){
              for(var i = 0;i<datas.length;++i)
              {
                if(datas[i].lessonid == lesson)
                {
                    this.wordlist = datas[i].wordlist
                    return
                }
                this.wordlist = datas[0].wordlist
              }
            }


        })
  },
};
</script>

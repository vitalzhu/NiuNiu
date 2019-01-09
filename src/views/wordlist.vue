<template>
  <div>
    <mt-header title="">
      <router-link to="/unitPage" slot="left">
        <mt-button>
          <img src=".././assets/back.png" width="24px" height="24px" alt="">
        </mt-button>
      </router-link>
    </mt-header>
    <hr>

    <ul>
      <li id = "li" v-for="word in wordlist" :key="word.name">
        <button id = "wordButton" @click="onClickWord(word.name)">
            {{word.name}}
        </button>
        <hr style="margin:3px;margin-left: 0px;">
      </li>
    </ul>
    <!-- <div>{{$route.params.selectedlesson}}</div> -->
  </div>
</template>

<style scope>
    #wordButton{
        margin: 0px;
        width: 100%;
        padding: 0px;
        border: 1px solid transparent;
        outline: none;
        background-color: rgba(255, 255, 255, 0);
        text-align: left;
    }

    #li{
        margin: 0%;
        padding-top: 8px;
        padding-bottom: 2px;
        border: 0px;
        height: 20px;
    }

    .mint-button-text{
      color: rgb(14, 13, 13);
    }
    .mint-header{
      background-color: rgba(255, 255, 255, 0);
    }
    
    body{
         background-image: url('.././assets/P4.png');
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

<template>
  <div class="puzzlepage">
    <mt-header title="">
        <router-link :to="{name:'wordpage',query:{ selectedword: this.word } }" slot="left">
            <mt-button>
                <img src=".././assets/back.png" width="24px" height="24px" alt="">
            </mt-button>
        </router-link>
    </mt-header>

    <div class="puzzleContainer">
        <!-- <p class="sentance" v-html="sentance"></p> -->
        <h1 style="padding-top:14%;margin-bottom:1px"><span style="color:#f37200;text-decoration:underline"> &nbsp;&nbsp;&nbsp;&nbsp;Puzzle &nbsp;&nbsp;&nbsp;&nbsp;</span></h1>
        <mt-radio
        class="page-part"
        :title="title"
        v-model="value"
        :options="optiones">
        </mt-radio>
    </div>

    <div>
      <button class = "PuzzleConfirm" @click="onClickConfirm">{{ OKText}}</button>
    </div>
  </div>
</template>

<style scope="this api replaced by slot-scope in 2.5.0+">

    .PuzzleConfirm{
        margin: 0px;
        padding: 0px;
        border: 0px solid transparent;
        outline: none;
        color: white;
        height: 40px;
        width: 200px;
        background-color: rgb(255, 193, 35);
    }

    .puzzleContainer{
        background-image: url('.././assets/puzzlebg.png');
        background-size: 100% 100%;
        background-repeat:no-repeat;
        background-position:center;
        width: 90%;
        height: 44%;
        margin-left: 5%;
        margin-top: 10%;
    }

    .puzzlepage{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.603);
    }
    

    .page-checklist .page-part {
        margin-top: 10%;
        
    }

    .mint-msgbox-message{
        color:black;
        height: 180;
        width: 300px;
        text-align:center;
    }
    .mint-msgbox{
        width: 72%;
    }
    .mint-cell{
        background-color: none;
        min-height: 34px;
        text-decoration: none;
        text-align: left;
    }

    .mint-radiolist , .page-part{
        text-align: center;
        margin-left:20px; 
        margin-top: 2px;
        /* padding-top: 40%; */
        width: 90%;
        overflow: hidden;
    }

    .sentance{
        padding-top: 100px;
        margin: 2px;
        color: rgb(143, 134, 134);
        font-size: 14px;
    }

    .mint-header{
      background-color: rgba(255, 255, 255, 0);
    }

    .mint-cell:last-child{
         background-size: 0px;
    }

</style>

<script>
import { Toast  } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { create } from 'domain';


export default {
  name: 'page-checklist',

    data() {
        return {
            optiones:[],
            word:"",
            sentance:"下列哪项关于 <span style=\"color:#f37200\">"+this.$route.query.curWord+"</span> 的描述是正确的",
            title:"下列哪项关于"+this.$route.query.curWord+"的描述是正确的",
            value: "",
            correctValue:"B",
            OKText:"确定",
        };
    },

    components:{
        Toast,
        MessageBox,
    },

    created() {
        this.$storage.set('test',{key:'11111'})
        const data = this.$storage.get('test')
        this.word = this.$route.query.curWord;

        this.$http.get('static/datas/puzzles.json').then(res=>
            {
                var datas = res.body['puzzles']
                if(datas.length>0)
                {
                    for(var i =0;i<datas.length;++i)
                    {
                        if(datas[i].word == this.word)
                        {
                            this.optiones = datas[i].options
                            this.correctValue = datas[i].correctvalue
                        }
                    }
                }
            })
        },

    methods:{
        onClickConfirm(){
            if(this.value == this.correctValue)
            {
                MessageBox({
                    title:'',
                    message:"<img height=100% width=100% src='./static/Correct.png'></img>",
                    showCancelButton:false,
                }).then(action=>{
                    this.$storage.set(this.word,{key:'true'})
                    this.$router.push({name:"wordpage",query:{selectedword:this.word}})
                });
            }
            else
            {
                MessageBox({
                    title:'',
                    message:"<img height=100% width=100% src='./static/Wrong.png'></img>",
                    showCancelButton:false,
                }).then(action=>{
                    this.value = '';
                });
            }
        },

    },    
};
</script>

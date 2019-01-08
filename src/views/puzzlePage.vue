<template>
  <div>
    <mt-header style="background-color: white;" title="">
        <router-link :to="{name:'wordpage',params:{ selectedword: this.word } }" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <hr>

    <div class="page-title">Puzzle</div>

    <mt-radio
      class="page-part"
      :title="title"
      v-model="value"
      :options="optiones">
    </mt-radio>


    <div>
      <mt-cell></mt-cell>
      <mt-button @click="onClickConfirm" size="large">OK</mt-button>
    </div>
  </div>
</template>

<style scope="this api replaced by slot-scope in 2.5.0+">
  .page-checklist .page-part {
    margin-top: 40px;
  }

  .mint-msgbox-message{
    color:black;
    height: 180;
    width: 300px;
    text-align:center;
  }
  .mint-msgbox{
      width: 80%;
  }

  .mint-radiolist , .page-part{
      text-align: left;
  }

</style>

<script>
import { Toast  } from 'mint-ui';
import { setTimeout } from 'timers';
import { MessageBox } from 'mint-ui';
import { create } from 'domain';


export default {
  name: 'page-checklist',

    data() {
        return {
            optiones:[],
            word:"",
            title:"下列哪项关于"+this.$route.params.curWord+"的描述是正确的",
            value: "",
            correctValue:"B",
        };
    },

    components:{
        Toast,
        MessageBox,
    },

    created() {
        this.$storage.set('test',{key:'11111'})
        const data = this.$storage.get('test')
        //console.log(data)

        this.word = this.$route.params.curWord;
        console.log(this.word)


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
            console.log(this)
            if(this.value == this.correctValue)
            {
                MessageBox({
                    title:'',
                    message:'Congratulations!',
                    showCancelButton:false,
                }).then(action=>{
                    this.$storage.set(this.word,{key:'true'})
                    this.$router.push({name:"wordpage",params:{selectedword:this.word}})
                });
            }
            else
            {
                MessageBox({
                    title:'',
                    message:'Try Again!',
                    showCancelButton:false,
                }).then(action=>{
                    this.value = '';
                });
            }
        },

    },    
};
</script>

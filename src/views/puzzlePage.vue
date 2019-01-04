<template>
  <div class="page-checklist">

    <mt-header style="background-color: white;" title="">
        <router-link to="/wordpage" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <hr>

    <div class="page-title">Puzzle</div>
    <mt-radio
      class="page-part"
      :title="title"
      v-model="value"
      :options="options3">
    </mt-radio>


    <div>
      <mt-cell title="选中的项">{{ value }}</mt-cell>
      <mt-button @click="onClickConfirm" size="large">OK</mt-button>
    </div>
  </div>
</template>

<style>
  .page-checklist .page-part {
    margin-top: 40px;
  }

  .mint-msgbox-message{
    color:black;
    height: 50px;
    text-align:center;
  }
  .mint-msgbox{
      width: 60%;
  }

  .page-title{
       margin-top: 60px;
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
        this.word = this.$route.params.curWord;
        this.options3 = [
                {
                    label: '选项F',
                    value: 'F',
                },
                {
                    label: '选项A',
                    value: 'A'
                },
                {
                    label: '选项B',
                    value: 'B'
                }
            ];
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

        getMessageStyle(strColor) {
            var obj = document.getElementsByClassName("mint-msgbox-message");
            if(obj.length == 0){
                this.getMessageStyle();
            }else{
                var i;
                for (i = 0; i < obj.length; i++) {
                    obj[i].style.color = strColor;
                }
            }

        },
    },    
};
</script>

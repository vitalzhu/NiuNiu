<template>

    <div id="pageBg">
        <mt-header title="">
        <router-link to="/wordlist" slot="left">
            <mt-button>
                <img src=".././assets/back.png" width="24px" height="24px" alt="">
            </mt-button>
        </router-link>
        </mt-header>
        <!-- <hr> -->

        <div id = "topContent">
            <div id="imgContent">
                <button id = "imgbutton"  @click="onClickImageItem">
                    <img :src="imageSrc" width="100px" height="120px" style="padding:12px">
                </button>   
                <div style="font-size:2px">（点击图片放大）</div>
            </div>

            <div id = "leftContent">
                <div id="wordAndBtn" style="margin-top:10px">
                    <h2 style="margin:10px;display:inline" id = "title">{{ title }}</h2>
                    <button id="button" @click="onClickVideo">
                        <img :src="videoImag" alt="video" width="16px" height="16px">
                    </button>
                </div>

                <h6 style="margin:10px" >{{property}}</h6>
                <p id = "p">{{translation}}</p>
                <p id="p">{{explain}}</p>
            </div>
        </div>

        <div class="clear" style="clear:both"></div>
        <div id = "bottomPuzzle" v-if="!isFinishPuzzle">
            <div id = "bottomContent">
                <div>
                    <button id="puzzlebutton" @click="onClickHelp">
                        <img :src="questionImage" width="82px" height="38px">
                    </button>
                </div>
            </div>
        </div>

        <div id = "bottomGift" v-if="isFinishPuzzle">
            
        </div>

    </div>
</template>

<style>
    #pageBg{
        height: 100%;
        width: 100%;
        margin: 0px;
    }

    #topContent
    {
        width: 100%;
        height: 220px;
        /* color: #2c3e50; */
        background-color:rgb(252, 252, 252);
        box-shadow: #2c3e50;
        text-align: center;
        box-shadow: 6px 10px 2px #88888877;
    }

    #imgContent{
        width: 46%;
        float: right;
        display: inline;
        padding: 0px;
    }

    #leftContent{
        width: 50%;
        float: left;
        display: inline;
        text-align: left;
        padding: 0px;
    }

    #imgbutton{
        margin: 0px;
        padding: 0px;
        border: 0px solid transparent;
        outline: none;
        background-color: white;
        background-image: url('.././assets/imgBtnBg.png');
        background-size: 100% 100%;
        background-repeat:no-repeat;
        background-position:right top;
    }

    #puzzlebutton{
        position: relative;
        top: 214px;
        left: 90px;
        margin: 0px;
        padding: 0px;
        border: 0px solid transparent;
        outline: none;
        background-color: rgba(255, 255, 255, 0);
    }

    #button{
        margin: 0px;
        padding: 0px;
        border: 0px solid transparent;
        outline: none;
        background-color: rgba(255, 255, 255, 0);
    }

    
    #bottomContent{
        margin-top: 15px;
        margin-bottom: 20px;
        width: 100%;
        height: 320px;
        background-image: url('.././assets/bottombg.png');
        background-size: 100% 100%;
        position: relative;
        top: 60px;
    }

    .mint-msgbox-content {
        padding: 0px;

    }

    .mint-msgbox{
        width: auto
    }

    #p{
        margin: 10px;
        word-wrap:break-word;
        width:auto;
    }

    .mint-header{
      background-color: rgba(255, 255, 255, 0);
    }
    body{
         background-image: url('.././assets/P4.png');
    }
</style>

<script>
import { MessageBox } from 'mint-ui';

export default {
    data: function(){
        return{
            title: "Always",
            imageSrc:"./static/logo.png",
            property:"adv.",
            translation:"总是",
            explain:"all the time or very many times asdasdasdasdfsdfsdfsfghghhhhhhsdasdasd",
            katongImage:"./static/logo.png",

            questionImage:"./static/arrow.png",
            isDisplayFloatImage:false,       
            videoImag:"./static/videoIcon.png", 
            itemimgbg:"./static/imgBtnBg.png",
            isFinishPuzzle:false,
        };
    },
    components:{
        MessageBox
    },
    methods:{       
        onClickVideo(){
            console.log("OnClickVideo")
            MessageBox({
            title: '',
            message: "<iframe height=auto width=auto src='http://player.youku.com/embed/XMzk4MDY1MjM4OA==' frameborder=0 'allowfullscreen'></iframe>",
            showCancelButton: false
            });
        },

        onClickImageItem(){
            console.log("OnClickItem")
            this.isDisplayFloatImage = !this.isDisplayFloatImage;
            MessageBox({
            title: '',
            message: "<img height=auto width=auto src='./static/logo.png'></img>",
            showCancelButton: false
            });
        },
        onClickHelp(){
            this.$router.push({name:"puzzle",query:{curWord:this.title}})
        },
    },

    created:function(){
        this.title = this.$route.query.selectedword;
        const data = this.$storage.get(this.title)
        this.isFinishPuzzle = data == null?false:true;
        this.$storage.remove(this.title)

        this.$http.get('static/datas/wordContent.json').then(res=>{
            var datas = res.body['allWords']
            if(datas.length>0)
            {
                for(var i =0;i<datas.length;++i){
                    if(datas[i].word == this.title)
                    {
                        this.property = datas[i].property
                        this.translation = datas[i].translation
                        this.explain = datas[i].explain
                        return
                    }
                }
            }
        })
    },
}
</script>

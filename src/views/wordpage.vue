<template>

    <div id="pageBg">
        <mt-header style="background-color: white;" title="">
        <router-link to="/wordlist" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        </mt-header>
        <!-- <hr> -->

        <div id = "topContent">
            <div id="imgContent">
                <button id = "imgbutton"  @click="onClickImageItem">
                    <img :src="imageSrc" width="100px" height="120px" style="padding:12px">
                </button>   
                <div>（点击图片放大）</div>
            </div>

            <div id = "leftContent">
                <h2 style="margin:10px;display:inline" id = "title">{{ title }}</h2>
                <button id="button" @click="onClickVideo">
                    <img :src="videoImag" alt="video" width="16px" height="16px">
                </button>
                <h6 style="margin:10px" >{{property}}</h6>
                <p id = "p">{{translation}}</p>
                <p id="p">{{explain}}</p>
            </div>
        </div>

        <div class="clear" style="clear:both"></div>
        <div>
            <div id = "bottomContent">
                <div>
                    <button id="puzzlebutton" @click="onClickHelp">
                        <img :src="questionImage" width="112px" height="58px">
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
    #pageBg{
        height: 100%;
        width: 100%;
        background-image: url('.././assets/p4.png');
        background-size: 100% 100%;
        background-repeat:no-repeat;
        background-position:right top;
        margin: 0px;
    }

    #topContent
    {
        width: 100%;
        height: 180px;
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
        top: 300px;
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
        height: 440px;
        background-image: url('.././assets/bottombg.png');
        background-size: 100% 100%;
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
            explain:"all the time or very many times asdasdasdasdasdasd",
            katongImage:"./static/logo.png",

            questionImage:"./static/arrow.png",
            isDisplayFloatImage:false,       
            videoImag:"./static/videoIcon.png", 
            itemimgbg:"./static/imgBtnBg.png",
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
            message: "<img height=1% width=100% src='./static/logo.png'></img>",
            showCancelButton: false
            });
        },
        onClickHelp(){
            this.$router.push({name:"puzzle",params:{curWord:this.title}})
        },
    },
    created:function(){
        this.title = this.$route.params.selectedword;
    },
}
</script>

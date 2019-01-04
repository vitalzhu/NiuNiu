<template>
    <div>
        <mt-header style="background-color: white;" title="">
        <router-link to="/wordlist" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        </mt-header>
        <hr>

        <div id = "topContent">

            <div id="rightContent">
                <button id = "button"  @click="onClickImageItem">
                    <img :src="imageSrc" width="150px" height="150px">
                </button>   
            </div>

            <div id = "leftContent">
                <h3 style="margin:10px;display:inline" id = "title">{{ title }}</h3>
                <button @click="onClickVideo">
                    Video
                </button>
                <h6 style="margin:10px" >{{property}}</h6>
                <p id = "p">{{translation}}</p>
                <p id="p">{{explain}}</p>
            </div>
        </div>

        <div class="clear" style="clear:both"></div>
        <div>
            <hr>
            <div id = "rightContent">
                <img :src="katongImage" width="200px" height="230px">
            </div>
            <div id = "leftContent">
            <button id="button" @click="onClickHelp">
                <img :src="questionImage" width="160px" height="160px"  >
            </button>
            </div>
        </div>
    </div>

</template>

<style>
    #topContent
    {
        width: 100%;
        height: 180px;
        color: #2c3e50;
        background-color:rgb(252, 252, 252);
        text-align: center;
    }

    #rightContent{
        width: 46%;
        float: left;
        display: inline;
        padding: 2px;
    }

    #leftContent{
        width: 50%;
        float: right;
        display: inline;
        text-align: left;
        padding: 0px;
    }

    #button{
        margin: 0px;
        padding: 0px;
        border: 1px solid transparent;
        outline: none;
        background-color: white;
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
            questionImage:"./static/logo.png",

            isDisplayFloatImage:false,        
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

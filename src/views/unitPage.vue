<template>
    <div id="list">
        <ul id="firstMenuList" >
            <li id="unit-li" v-for="item in unitList" :key = "item.name">
                <button id="unitButton" @click="onClickUnit(item)">
                   <a href="#" style="color:black"> {{item.name}}</a>
                </button>
                <div v-for="(childItem,index) in item.lessons" :key="index">
                    <button id="lessonButton" v-if="!item.isShow" @click="onClickLesson(childItem)"> 
                        <a href="#">{{ childItem.lesson }}</a>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
    #unitButton{
        margin: 0px;
        width: 100%;
        padding: 0px;
        border: 1px solid transparent;
        outline: none;
        background-color: rgba(255, 255, 255, 0);
        text-align: left;
    }

    #lessonButton{
        margin: 0px;
        padding: 0px;
        border: 1px solid transparent;
        outline: none;
        width: 82%;
        text-align: left;
        background-color: rgba(255, 255, 255, 0);
    }

    #unit-li{
        margin: 0%;
        padding: 6px;
    }

    body{
        /* background-image: url('.././assets/P4.png');  */
         background: #ffffff
    }
</style>

<script>

export default {
    data:function(){

        return{
            currentClick:false,
            curClickName:"",
            curSecondItem:null,
 
            unitList:[],
        }
    },

    methods:{
        onClickUnit(item){
            item.isShow = !item.isShow;
        },
        onClickLesson(lesson){
            console.log(lesson)
            this.$router.push({name:'WordList',params:{selectedlesson:lesson.id}})
        },
    },
    created(){
        this.$http.get('static/datas/data.json').then(res=>{
            this.unitList = res.body['units']
        })
    }
}
</script>

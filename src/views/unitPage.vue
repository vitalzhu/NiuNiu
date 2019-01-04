<template>
    <div id="list">
        <ul id="firstMenuList" >
            <li id="unit-li" v-for="item in unitList" :key = "item.name">
                <button id="unitButton" @click="onClickUnit(item)">
                   <a href="#" style="color:black"> {{item.name}}</a>
                </button>
                <div v-for="(childItem,index) in item.lessons" :key="index">
                    <button id="lessonButton" v-if="item.isShow" @click="onClickLesson(childItem.lesson)"> 
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
        background-color: white;
        text-align: left;
    }

    #lessonButton{
        margin: 0px;
        padding: 0px;
        border: 1px solid transparent;
        outline: none;
        width: 82%;
        text-align: left;
        background-color: white;
    }

    #unit-li{
        margin: 0%;
        padding: 6px;
    }
</style>

<script>

export default {
    data:function(){

        return{
            currentClick:false,
            curClickName:"",
            curSecondItem:null,
 
            unitList:[
                {
                    name:"第一单元",
                    isShow:false,
                    lessons:[
                        {lesson:"第一课",},
                        {lesson:"第二课",},
                        {lesson:"第三课",},
                        {lesson:"第四课",},
                        ]
                },
                {
                    name:"第二单元",
                    isShow:false,
                    lessons:[
                        {lesson:"第五课",},
                        {lesson:"第六课",},
                        {lesson:"第七课",},
                        {lesson:"第八课",},
                    ]
                },
            ],
        }
    },

    methods:{
        onClickUnit(item){
            item.isShow = !item.isShow;
        },
        onClickLesson(lesson){
            console.log(lesson)
            this.$router.push({name:'WordList',params:{selectedlesson:lesson}})
        },
    },
}
</script>

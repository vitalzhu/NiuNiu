<template>
    <div id="list">
        <div v-for="item in unitList" :key = "item.name">
            <ul id="unit" @click="onClickUnit(item)">
               {{item.name}}
            </ul>
                        
             <div v-for="(childItem,index) in item.lessons" :key="index">
                <ul id="lesson" v-if="!item.isShow" @click="onClickLesson(childItem)"> 
                        {{ childItem.lesson }}
                </ul>
            </div>
            </div>
    </div>
</template>

<style>

    #list{
        height: 80%;
        position: relative;
        top: 6%;
    }
    #unit{
        padding: 6px;
        margin: 4px 6px;
        margin-bottom: 0px;
        border: 0px;
        height: 26px;
        font-size: 22px;
        text-align: left;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 3px 0px #504f4f77;
    }

    #lesson{
        padding: 4px;
        margin: 2px 10px;
        border: 0px;
        height: 22px;
        text-align: left;
        
        background-color: rgba(255, 255, 255, 0.6);
        box-shadow: 1px 2px 2px #3f3e3e77;
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

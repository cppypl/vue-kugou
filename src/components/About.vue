<template>
    <div>
        我是about！

        <hr>
        <router-link :to="{path:'/about/'+item.sex+'/'+item.id,query:{follow:5}}" :key="index" v-for="item,index in dataList" style="padding:20px">{{item.name}}</router-link>

        <div>
            <p>id:{{userInfo.id}}</p>
            <p>姓名：{{userInfo.name}}</p>
            <p>性别：{{userInfo.sex}}</p>
        </div>
        <hr>

        
        <div>
            <router-link exact to="?follow=5">关注</router-link>
            <router-link exact to="?follow=wwwwwwwwwww">信息</router-link>
        </div>

        {{$route.query}}
    </div>
</template>
<script>
    let data=[
        {
            id:0,
            name:'penglei',
            sex:'man'
        },
        {
            id:1,
            name:'xujingyu',
            sex:'women'
        },
        {
            id:2,
            name:'dashu',
            sex:'man'
        },
    ]
    export default {
        data(){
            return {
                dataList:data,
                userInfo:{}
            }
        },
        watch:{
            $route(){
                let id=this.$route.params.userId;
                if(id){
                    this.userInfo=this.dataList[id]
                }else{
                    this.userInfo={}
                }

            }
        },
        created(){
            let id=this.$route.params.userId;
            if(id){
                 this.userInfo=this.dataList[id]
            }else{
                this.userInfo={}
            }
        }
    }

</script>
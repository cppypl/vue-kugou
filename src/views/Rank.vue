<template>
    <div>

        <div class="bd rank-list">
            <!-- start 排行列表 -->
            <ul class="panel-img-list">
                <li v-for="item,index in rankList">
                    
                    <router-link :to="'/rank/info/'+item.rankid">
                        <div class="panel-img-left">
                            <img :src="imgList[index]" width="100%">
                        </div>
                        <div class="panel-img-content">
                            <p>
                                {{item.rankname}}
                            </p>
                        </div>
                        <div class="panel-img-right">
                            <i class="panel-img-arrow"></i>
                        </div>
                    
                    </router-link>
                </li>
            </ul>
            <!-- end 排行列表 -->
        </div>
        <router-view></router-view>
    </div>

</template>


<script>
export default {
    data(){
        return {
            rankList:[],
            imgList:[]
        }
    },
    created(){

        this.$http.get('/proxy/rank/list/?json=true')
        .then((res)=>{
            this.rankList=res.data.rank.list;
            
            this.imgList=this.rankList.map(item=>{

                return  item.imgurl.split('{size}').join('400');
                 
            })
        })
    }
}
</script>

<style scope>

</style>



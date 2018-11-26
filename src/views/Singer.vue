<template>
    <div>

        <div class="bd rank-list">
            <!-- start 排行列表 -->
            <ul class="panel-img-list">
                <li v-for="item,index in rankList">
                    <router-link :to="'/singer/list/'+item.classid">
                        <div class="panel-img-left">
                            <img :src="item.imgurl" width="100%">
                        </div>
                        <div class="panel-img-content">
                            <p>
                                {{item.classname}}
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

        this.$http.get('/proxy/singer/class/?json=true')
        .then((res)=>{
            this.rankList=res.data.list;
            
            
        })
    }
}
</script>



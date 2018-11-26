<template>
    <div>

        <div class="bd rank-list">
            <!-- start 排行列表 -->
            <ul class="panel-img-list">
                <li v-for="item,index in pList">
                    <router-link :to="'/plist/list/'+item.specialid">
                        <div class="panel-img-left">
                            <img :src="imgList[index]" width="100%">
                        </div>
                        <div class="panel-img-content list-panel-img-content">
                            <p class="panel-img-content-first">
                                {{item.specialname}}
                            </p>
                            <p class="panel-img-content-sub">
								<i class="icon-music"></i>{{item.playcount}}
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
            pList:[],
            imgList:[]
        }
    },
    created(){

        this.$http.get('/proxy/plist/index/?json=true')
        .then((res)=>{
            this.pList=res.data.plist.list.info;            
            this.imgList=this.pList.map(item=>{

                return  item.imgurl.split('{size}').join('400');
                 
            })
        })
    }
}
</script>

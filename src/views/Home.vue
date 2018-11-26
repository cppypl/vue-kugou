
<template>
    <div>
        <div class="new-song-swipe ">
            <mt-swipe :auto="4000">
        
                <mt-swipe-item v-for="item,index in bannerList" :key="index">
                <img :src="item.imgurl" width="100%" />
                </mt-swipe-item>
            </mt-swipe>

            <ul class="panel-songslist">
                <li class="panel-songslist-item" :id="item.sqhash" v-for="item,index in indexList" @click="playMusic(index)">
                    <div class="panel-songs-item-name btn_play">
                        <span>{{item.filename}}</span>
                    </div>
                    <div class="panel-songs-item-download" ><i></i></div>
                    
                </li>
            
            </ul>
        </div>

        
            
    </div>
</template>


<script>

export default {

    data(){
        return {
            bannerList:[1,2,3],
            indexList:[],

        }
    },
    methods:{
        playMusic(index){
            this.$store.dispatch('playMuisc',index)
        }
        
    },
    
    created(){
        this.$http.get('/proxy/?json=true')
        .then((res)=>{
            this.indexList=res.data.data;
            this.bannerList=res.data.banner;
            //获取当前页面的所有歌曲hash
            let hashArr=res.data.data.map(item=>item.hash)
            this.$store.commit('changeNowPageSingList',hashArr)
            
        })
    
    }
}

  
</script>

<style>
.new-song-swipe {
    height: 6.2rem;
  }
</style>



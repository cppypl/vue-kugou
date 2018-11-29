<template>
    <div class="bd js-bd-box" id="bd">
        <div class="top-goback top-goback-bg" id="topGoback">
            <p class="page-title">搜索</p>
            <div class="goback" @click="fanhui">
                <i></i>
            </div>
        </div>
        <!-- start search -->
        
        <div class="search-box">
            <div class="search-form-box">
                    <span class="search-icon"></span>
                    <input type="text" placeholder="歌手/歌名/拼音" name="keyword" class="search-keyword" v-model="searchValue"  @keydown.enter="search(searchValue)">
                    <input type="button" value="搜索"  class="search-btn search-disabled-btn" @click="search(searchValue)">
            </div>
        </div>
        <!-- end search -->

        <!-- start 最近热门 -->
        <div class="hot-search" v-if="!searchValueList">
            <div class="hot-search-hd">
                最近热门
            </div>
           <ul class="hot-search-list" id="hotSearchList">
            <li v-for="item,index in hotList" @click="search(item.keyword)"> <a href="javascript:;" class="hot-keyword js-hot-keyword">{{item.keyword}}</a> </li>  
           </ul>
            
            
        </div>
        <!-- end 最近热门 -->
        
        <!-- start 搜索结果 -->
        <div class="search-result" v-if="searchValueList">
            <div class="search-result-hd"> 共有{{searchValueList.length}}条结果 </div>
            <ul class="panel-songslist" >  
                <li class="panel-songslist-item" v-for="item,index in searchValueList" @click="playMusic(index)"> <div class="panel-songs-item-name btn_play"> <span>{{item.filename}}</span> </div> </li>
            </ul>
        </div>
        
        

    </div>
</template>

<script>
export default {
    data(){
        return {
            hotList:[],
            searchValue:'',
            searchValueList:''
        }
    },
    methods:{
        search(val){
             this.$http.get('/kugou/api/v3/search/song?format=jsonp&keyword='+val+'&page=1&pagesize=30&showtype=1&callback=kgJSONP627251594')
                .then(res=>{
                    
                    let obj=JSON.parse(res.data.slice(17,-1))
                    this.searchValueList=obj.data.info
                    //获取当前页面的所有歌曲hash
                    let hashArr=this.searchValueList.map(item=>item.hash)
                    this.$store.commit('changeNowPageSingList',hashArr)
                
                    
                })
        },
        fanhui(){
            this.$router.go('-1')
            
        },
        playMusic(index){
            this.$store.dispatch('playMuisc',index)
        }
    },
    created(){
        this.$http.get('/kugou/api/v3/search/hot?format=jsonp&plat=0&count=30&callback=kgJSONP111091501')
        .then(res=>{
            // function strToJson(str){ 
            //     var json = eval('(' + str + ')'); 
            //     return json; 
            // }
            
            //console.log(JSON.parse(res.data));
            
            let obj=JSON.parse(res.data.slice(17,-1))
           // alert(this.hotList)
           this.hotList=obj.data.info
            
        })
    }
}
</script>

<style>

</style>

<template>
    <div>

        <div class="rank-info-hd" >
            <div class="top-goback">
                <p class="page-title">{{dataList.info.list.specialname}}</p>
                <div class="goback" @click="fanhui">
                    <i></i>
                </div>
            </div>
			<img :src="bannerUrl" style="margin-top: -4.5rem;" width="100%">
			
		</div>
        <div class="intro-box" :class="{introboxmore:showMore}"  @click="showMore=!showMore">
			<p>
				{{dataList.info.list.intro}}
			</p>
			<div class="intro-icon-box">
				<i class="intro-icon"></i>
			</div>
		</div>


        <ul class="panel-songslist panel-songslist-rank">
			<li class="panel-songslist-item" v-for="item,index in dataList.list.list.info" :key="index">
				<div class="panel-songs-item-name" style="padding-left:0"  @click="playMusic(index)">
					<span>{{item.filename}}</span>
				</div>
				<div class="panel-songs-item-download" ><i></i></div>
			</li>
				
		</ul>

    </div>

</template>


<script>
export default {
    data(){
        return {
            dataList:[],
            bannerUrl: "",
            showMore:false
        }
    },
    methods:{
        fanhui(){
            this.$router.push('/list')
            
        },
        playMusic(hash){
            this.$store.dispatch('playMuisc',hash)
        }
    },
    created(){
        this.$http.get('/proxy/'+this.$route.fullPath+'/?json=true')
        .then((res)=>{
            this.dataList=res.data;
            this.bannerUrl = res.data.info.list.imgurl.split("{size}").join("400");
            //获取当前页面的所有歌曲hash
            let hashArr=res.data.list.list.info.map(item=>item.hash)
            this.$store.commit('changeNowPageSingList',hashArr)
        })
    }
}
</script>


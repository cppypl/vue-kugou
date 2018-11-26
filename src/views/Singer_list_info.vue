<template>
    <div>
      <div class="top-goback" id="topGoback">
	    	<p class="page-title" >{{dataList.info.singername}}</p>
	    	<div class="goback" @click="fanhui">
	    		<i></i>
	    	</div>
	    </div>

        <div class="img-box" id="imgBoxInfo">
			<img :src="imgUrl" width="100%">
		</div>
        <div class="intro-box " :class="{introboxmore:showMore}" @click="showMore=!showMore">
			<p>
				{{dataList.info.intro}}
			</p>
			<div class="intro-icon-box"  >
				<i class="intro-icon"></i>
			</div>
		</div>
        <ul class="panel-songslist" id="panelSongsList">
            <li class="panel-songslist-item" v-for="item,index in dataList.songs.list">
                <div class="panel-songs-item-name" @click="playMusic(index)">
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
            dataList:'',
            imgUrl: '',
            showMore:false,
        }
    },
    methods:{
        fanhui(){
            this.$router.push('/singer/list')
            
        },
        playMusic(hash){
            this.$store.dispatch('playMuisc',hash)
        }
    },
    created(){
        this.$http.get('/proxy/'+this.$route.fullPath+'/?json=true')
        .then((res)=>{
            this.dataList=res.data;
            this.imgUrl = res.data.info.imgurl.split("{size}").join("400");
            //获取当前页面的所有歌曲hash
            let hashArr=res.data.songs.list.map(item=>item.hash)
            this.$store.commit('changeNowPageSingList',hashArr)
        })
    }
}
</script>


<template>
    <div>

        <div class="rank-info-hd" >
            <div class="top-goback">
                <p class="page-title">{{rankname}}</p>
                <div class="goback" @click="fanhui">
                    <i></i>
                </div>
            </div>
			<img :src="bannerUrl" style="margin-top: -4.5rem;" width="100%">
			<div class="rank-info-time">
				<span>上次更新时间：{{getaddTime}}</span>

                
			</div>
		</div>
        <ul class="panel-songslist panel-songslist-rank">
			<li class="panel-songslist-item" v-for="item,index in dataList" :key="index">
				<div class="panel-songs-item-name btn_play" @click="playMusic(index)">
					<span>{{item.filename}}</span>
				</div>
				<div class="panel-songs-item-download" ><i></i></div>
				<span class="panel-songs-item-num " :class="{one:index==0,two:index==1,three:index==2}">{{index+1}}</span>
			</li>
				
		</ul>

    </div>

</template>


<script>
export default {
  data() {
    return {
      dataList: [],
      bannerUrl: "",
      timestamp:'',
      rankname:''
    };
  },
  methods:{
      fanhui(){
         this.$router.push('/rank')
         
      },
      playMusic(hash){
            this.$store.dispatch('playMuisc',hash)
        }
  },

  computed: {
    getaddTime() {
        var time = new Date(this.timestamp);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
    
        return y+'-'+add0(m)+'-'+add0(d);
        
        
    }
  },
  created() {
    this.$http.get("/proxy/" + this.$route.fullPath + "/?json=true")
      .then(res => {
        this.bannerUrl = res.data.info.imgurl.split("{size}").join("400");
        this.dataList = res.data.songs.list;
        this.timestamp=res.data.songs.timestamp*1000;
        this.rankname=res.data.info.rankname
        //获取当前页面的所有歌曲hash
        let hashArr=res.data.songs.list.map(item=>item.hash)
        this.$store.commit('changeNowPageSingList',hashArr)
      });
  }
  
};

function add0(m) {
    return m < 10 ? "0" + m : m;
}
</script>



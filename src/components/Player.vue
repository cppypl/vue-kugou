<template>
    

    <div>

        <div class="panel-play"  v-show="showPanelPlay" >
            <div class="bg-overlay js-bg-overlay" :style="'background-image: url('+$store.state.singerImg+')'"></div>
            <div class="play-overlay"></div>
            <!--start top-fixed-->
            <div class="top-fixed">

                
                <!--start top-nav -->
                <div class="top-goback">
                    <p class="page-title js-ftSongName">{{$store.state.playData.songName}}</p>
                    <div class="goback" @click="showPanelPlay=false">
                        <i></i>
                    </div>
                </div>
                <!--end top-nav -->
            </div>
            <!--end top-fixed-->

            <div class="panel-play-bd" id="panelPlayBd">
                <div class="panel-play-img-box">
                    <img :src="$store.state.singerImg" width="100%" class="js-ftImg">
                </div>
                <div class="panel-play-lrc-box">
                    <div class="panel-play-lrc" id="playLrc" style="height: auto;"><p>我们总是在人前</p><p>强撑着愉悦的笑容</p><p>累了不敢多言痛不敢倾诉</p><p>为了生活辛苦忙碌</p><p>我们总是在背后</p><p>咀嚼着难耐的心痛</p><p>肩上有着不可推卸的责任</p><p>为了幸福默默付出</p><p>朋友啊朋友 我们都 一样</p><p>都是一个普普通通的人</p><p>汗水流在谁的脸上</p><p>谁就会知道心酸在泛滥</p><p>朋友啊朋友 我们都 一样</p><p>都是一个普普通通的人</p><p>压力扛在谁的肩上</p><p>谁就会懂得生存的艰难</p><p>我们总是在背后</p><p>咀嚼着难耐的心痛</p><p>肩上有着不可推卸的责任</p><p>为了幸福默默付出</p><p>朋友啊朋友 我们都 一样</p><p>都是一个普普通通的人</p><p>汗水流在谁的脸上</p><p>谁就会知道心酸在泛滥</p><p>朋友啊朋友 我们都 一样</p><p>都是一个普普通通的人</p><p>压力扛在谁的肩上</p><p>谁就会懂得生存的艰难</p></div>
                </div>
                <div class="time-wrap" id="timeWrap">
                    <div class="timeshow" id="timeshow">00:30</div>
                    <div class="progress-wrap" id="progressWrap">
                        <div class="progress-bar" id="progressBar">
                            <div class="preview-progress" id="previewProgress" style="width: 100%;"></div>
                            <div class="progress" id="progress" style="width: 9.92934%;"><span></span></div>
                        </div>
                    </div>
                    <div class="time" id="time">05:00</div>
                </div>
                <div class="play-operate">
                    <i class="btn-prev js-btnPrev" @click="bofangPrev"></i>
                    <i class="play-operate   " @click="bofang" :class="{'btn-play':!$store.state.playStatus,'btn-pause':$store.state.playStatus}"></i>	
                    <i class="btn-next js-btnNext" @click.stop="bofangNext"></i>
                </div>
               
            </div>
           
                    
        </div>
        <div class="ft-player" v-show="$store.state.showPlayer" @click="showPanelPlay=true">
                    <a href="javascript:;" class="ft-go-info" id="goPlay">
                        <div class="ft-left">
                            <img :src="$store.state.singerImg"  class="js-ftImg" width="100%">
                        </div>
                        <div class="ft-center">
                            <p class="ft-desc js-ftSongName" id="ftSongName">{{$store.state.playData.songName}}</p>
                            <p class="ft-sub-desc js-ftUserName" id="ftUserName">{{$store.state.playData.singerName}}</p>
                        </div>
                    </a>
                    <div class="ft-right">
                        <i class=" js-btnPlayPause btnPlay" @click.stop="bofang" :class="{btnPause:$store.state.playStatus}"></i>	
                        <i class="btn-next js-btnNext" @click.stop="bofangNext"></i>
                        
                    </div>
                    <audio :src="$store.state.muiscUrl" controls="controls" autoplay id="audio" style="display:none"></audio>
            </div>
    </div>
    

</template>

<script>
export default {
    data(){
        return{
            muiscUrl:'',
            showPlayer:false,
            playData:[],
            singerImg:'',
            playStatus:true,
            showPanelPlay:false
        }
    },
    methods:{
        bofang(){

            let audio=document.getElementById('audio');
             if(audio.paused){
                audio.play()
                this.$store.commit('bofang',true) 
            }else{
                audio.pause()
                this.$store.commit('bofang',false) 
            }
          
        },
        bofangNext(){
            this.$store.dispatch('bofangNext') 
        },
        bofangPrev(){
            this.$store.dispatch('bofangPrev') 
        }
    },
}
</script>

<style>

</style>

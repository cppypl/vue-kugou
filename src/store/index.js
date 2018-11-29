import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

Vue.use(Vuex)

let timer;
const store = new Vuex.Store({
    // ...
    state:{
        newSingList:[],
        banner:[],
        muiscUrl:'',
        showPlayer:false,
        playData:[],
        singerImg:'',
        playStatus:true,
        nowPageSingList:[],
        muiscIndex:0,
        krc:'',
        krctime:''
    },
    mutations:{
        showIndexList(state,data){
            state.newSingList=data.data
            state.banner=data.banner
        },
       
        bofang(state,val){
            state.playStatus=val
            
        },
        changePlayerDate(state,obj){
            state.muiscUrl=obj.muiscUrl
            state.playData=obj.playData
            state.showPlayer=obj.showPlayer
            state.singerImg=obj.singerImg
            state.muiscIndex=obj.muiscIndex
          
        },
        changeNowPageSingList(state,val){
            state.nowPageSingList=val
        },
        changeKrc(state,val){
            state.krc=val
        },
        changekrctime(state,val){
            state.krctime=val
        }
        
    },
    actions:{
        playMuisc(context,index){
            
            axios.get('/proxy/app/i/getSongInfo.php?cmd=playInfo&hash='+context.state.nowPageSingList[index]+'&from=mkugou')
            .then((res)=>{
               
                let obj={
                    muiscUrl:res.data.url,//给播放器src放歌
                    playData:res.data,
                    showPlayer:true,//播放器显示
                    singerImg:res.data.imgUrl.split("{size}").join("400"),
                    muiscIndex:index//当前播放的第几首
                }
                context.commit('changePlayerDate',obj)///虽然ajax请求回来了，但改值必须mutations
            })
            axios.get('/proxy/app/i/krc.php?cmd=100&hash='+context.state.nowPageSingList[index]+'&timelength=103000&d=0.3427127003052546').then(res=>{
                let medisArray=[];
                res.data.split('\r\n').forEach(item=>{
                    let t=item.substring(item.indexOf("[") + 1, item.indexOf("]"));

                    medisArray.push({

                        t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
                        c: item.substring(item.indexOf("]") + 1, item.length)
                    });

                })
                
                context.commit('changeKrc',medisArray)//提交改变歌词
            })
           
          
            
            
        },
        bofangNext(context){
            
            let index=0;
            if(context.state.muiscIndex==context.state.nowPageSingList.length-1){
                index=0;
            }else{
                index=context.state.muiscIndex+1;
            }
            axios.get('/proxy/app/i/getSongInfo.php?cmd=playInfo&hash='+context.state.nowPageSingList[index]+'&from=mkugou')
            .then((res)=>{
               
                let obj={
                    muiscUrl:res.data.url,//给播放器src放歌
                    playData:res.data,
                    showPlayer:true,//播放器显示
                    singerImg:res.data.imgUrl.split("{size}").join("400"),
                    muiscIndex:index//当前播放的第几首
                }
                context.commit('changePlayerDate',obj)///虽然ajax请求回来了，但改值必须mutations
            })
           
        },
        bofangPrev(context){
            let index=0;
            if(context.state.muiscIndex==0){
                index=context.state.nowPageSingList.length-1;
            }else{
                index=context.state.muiscIndex-1;
            }
            axios.get('/proxy/app/i/getSongInfo.php?cmd=playInfo&hash='+context.state.nowPageSingList[index]+'&from=mkugou')
            .then((res)=>{
               
                let obj={
                    muiscUrl:res.data.url,//给播放器src放歌
                    playData:res.data,
                    showPlayer:true,//播放器显示
                    singerImg:res.data.imgUrl.split("{size}").join("400"),
                    muiscIndex:index//当前播放的第几首
                }
                context.commit('changePlayerDate',obj)///虽然ajax请求回来了，但改值必须mutations
            })
        },
        
    }

})

export default store
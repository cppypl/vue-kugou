<template>
    <div>
        <div class="top-goback top-goback-bg" id="topGoback">
	    	<p class="page-title">热门歌手</p>
	    	<div class="goback" @click="fanhui">
	    		<i></i>
	    	</div>
	    </div>
        <ul class="panel-img-list singer-img-list">
                <li v-for="item,index in dataList.singers.list.info">
                    <router-link :to="'/singer/info/'+item.singerid">
                        <div class="panel-img-left">
                            <img :src="imgUrl[index]" width="100%">
                        </div>
                        <div class="panel-img-content">
                            <p >
                                {{item.singername}}
                            </p>
                        </div>
                    </router-link>
                </li>
                    
        </ul>

    </div>

</template>


<script>
export default {
    data(){
        return {
            dataList:[],
            imgUrl: [],
            showMore:false
        }
    },
    methods:{
        fanhui(){
            this.$router.push('/singer')
            
        }
    },
    created(){
        this.$http.get('/proxy/'+this.$route.fullPath+'/?json=true')
        .then((res)=>{
           
            this.dataList=res.data;
            this.imgUrl = res.data.singers.list.info.map(item=>{
                return item.imgurl.split("{size}").join("400");
            })
        })
    }
}
</script>


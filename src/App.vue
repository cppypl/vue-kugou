<template>

  <div id="app" style="width:100%" > 
      <div class="top-hd">
        <router-link class="logo" to="/" exact=""></router-link>
        <router-link to="/search/index" class="btn-search" style="    border-bottom: none;"></router-link>
    </div>


      <router-view  name="nav" ></router-view>
      <transition>
        <router-view class="routerViews" ></router-view>
      </transition>
      <!-- <router-view name="slider"/> -->
        <router-view  name="player" ></router-view>
        
    

  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>


import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NotFind from '@/views/404'
import Singer from '@/views/Singer'
// import Rank from '@/views/Rank'
import List from '@/views/List'
import Rank_info from '@/views/Rank_info'
import Plist_info from '@/views/Plist_info'
import Singer_list from '@/views/Singer_list'
import Singer_list_info from '@/views/Singer_list_info'
import Player from '@/components/Player'
import Nav from '@/components/Nav'
import Search from '@/views/Search'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      components:{
        player: Player,
        nav:Nav,
        default: Home
      }
    },
    {
      path: '/rank',
      components:{
        player: resolve => require(['@/views/Rank.vue'], resolve),
        nav:Nav,
        // default: Rank
      }
      
    },
    {
      path:'/list',
      components:{
        player:Player,
        nav:Nav,
        default: List
      }
    },
    {
      path:'/singer',
      components:{
        player:Player,
        nav:Nav,
        default: Singer
      }
    },
    {
      path:'/rank/info/:id?',
      components:{
        player:Player,
        default: Rank_info
      }

    },
    {
      path:'/plist/list/:id?',
      components:{
        player:Player,
        default: Plist_info
      }

    },
    {
      path:'/singer/list/:id?',
      components:{
        player:Player,
        default: Singer_list
      }

    },
    {
      path:'/singer/info/:id?',
      components:{
        player:Player,
        default: Singer_list_info
      }

    },
    {
      path:'/search/index/:id?',
      components:{
        player:Player,
        default: Search
      }

    },
    {
      path: '*',
      components:{
        nav:Nav,
        default: NotFind
      }
      
    }
  ]
})

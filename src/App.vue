<script>

import { store } from './data/store';

import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppPlaylist from './components/AppPlaylist.vue'
import AppCTA from './components/AppCTA.vue'
import AppLatestsArticles from './components/AppLatestsArticles.vue'
import AppTestimonials from './components/AppTestimonials.vue'
import AppEvent from './components/AppEvent.vue'
import AppFooter from './components/AppFooter.vue';
import AppChannel from './components/AppChannel.vue'


export default {
  name: 'App',
  components:{
    AppHeader,
    AppHero,
    AppPlaylist,
    AppChannel,
    AppCTA,
    AppLatestsArticles,
    AppTestimonials,
    AppEvent,
    AppFooter
  },
  data(){
    return{
      store,

    }
  }
}
</script>

<template>
  <!-- ? Header -->
  <AppHeader/>
  <!-- ? Main -->
  <main>
    <AppHero/>
    <AppPlaylist :obj="store.testimonial"/>
    <AppChannel/>
    <AppLatestsArticles :obj="store.playlists"/>
    <AppCTA :obj="store.textCards"/>
    <AppLatestsArticles :obj="store.articles"/>
    <AppTestimonials :obj="store.partners"/>
    <AppEvent/>
  </main>
  <!-- ? Footer -->
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss'


</style>
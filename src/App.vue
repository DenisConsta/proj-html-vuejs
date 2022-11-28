<script>

import { store } from './data/store';

import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppPlaylist from './components/AppPlaylist.vue'
import AppCTA from './components/AppCTA.vue'
import AppArticlesPlaylists from './components/AppArticlesPlaylists.vue'
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
    AppArticlesPlaylists,
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
  <AppHeader :obj="store.navbar"/>
  <!-- ? Main -->
  <main>
    <AppHero :obj="store.hero"/>
    <AppPlaylist :obj="store.testimonial"/>
    <AppChannel :obj="store.channelSection"/>
    <AppArticlesPlaylists :obj="store.playlists"/>
    <AppCTA :obj="store.cta"/>
    <AppArticlesPlaylists :obj="store.articles"/>
    <AppTestimonials :obj="store.AppTestimonial"/>
    <AppEvent :obj="store.event"/>
  </main>
  <!-- ? Footer -->
  <AppFooter :obj="store.footer"/>
</template>

<style lang="scss">
@use './styles/general.scss'


</style>
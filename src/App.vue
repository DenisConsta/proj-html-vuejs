<script>

import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppPlaylist from './components/AppPlaylist.vue'
import AppCTA from './components/AppCTA.vue'
import AppLatestsArticles from './components/AppLatestsArticles.vue'
import AppTestimonials from './components/AppTestimonials.vue'
import AppEvent from './components/AppEvent.vue'
import AppFooter from './components/AppFooter.vue';



export default {
  name: 'App',
  components:{
    AppHeader,
    AppHero,
    AppPlaylist,
    AppCTA,
    AppLatestsArticles,
    AppTestimonials,
    AppEvent,
    AppFooter
  }
}
</script>

<template>
  <!-- ? Header -->
  <AppHeader/>
  <!-- ? Main -->
  <main>
    <AppHero/>
    <AppPlaylist/>
    <AppCTA/>
    <AppLatestsArticles/>
    <AppTestimonials/>
    <AppEvent/>
  </main>
  <!-- ? Footer -->
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss'


</style>
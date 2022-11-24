<script>

import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components:{
    AppHeader,

  }
}
</script>

<template>
  <AppHeader/>
  <div class="container">
    <h1 class="display-1">Hello World</h1>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss'


</style>
<script>
export default {
  name: "AppPlaylist",
};
</script>

<template>
  <section>
    <div class="container">
      <h3>AppPlaylist</h3>
    </div>  
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section{
  height: 1015px;
  background-image: linear-gradient(to right bottom, #0219ea, #d3000c);

  .container{
    @include flexMC('center', 'center');
    height: 100%;
    color: white;
  }
}

</style>
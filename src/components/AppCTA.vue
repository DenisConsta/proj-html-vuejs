<script>
export default {
  name: "AppCTA",
};
</script>

<template>
  <section>
    <div class="container">
      <h3>AppCTA</h3>
    </div>  
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section{
  height: 1510px;
}
.container{
    @include flexMC('center', 'center');
    height: 100%;
    color: black;
  }

</style>
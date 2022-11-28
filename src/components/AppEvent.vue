<script>
export default {
  name: "AppEvent",
};
</script>

<template>
  <section>
    <div class="container h-100">
      <h3>Crossfit workout of the day</h3>
      <span>November 15th, 2019</span>
      <a href="#">View all videos <i class="fa-solid fa-arrow-right"></i>  </a>
    </div>  
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section{
  background-image: linear-gradient(to right bottom, rgb(57, 77, 255) 35%,rgb(255, 62, 72) 100%),url("../assets/images/banner14-2x.jpg");
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 15rem 0;
  
  .container{
    @include flexMC('center', 'center');
    flex-direction: column;
  }

  h3{
    font-size: 3.5rem;
  }

  span{
    font-size: 2.2rem;
    font-weight: 500;
    color: $color-yellow;
  }

  a{
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    & i{
      margin: 0 .5rem;
    }
  }
}
</style>
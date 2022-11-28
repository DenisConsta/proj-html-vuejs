<script>
export default {
  name: "AppEvent",
  props: {
    obj: Object,
  },
};
</script>

<template>
  <section>
    <div class="container h-100">
      <div class="play">
        <i class="fa-solid fa-play"></i>
      </div>

      <h3>{{ obj.title }}</h3>
      <span>{{ obj.subtitle }}</span>
      <a href="#">{{ obj.anchor }} <i class="fa-solid fa-arrow-right"></i> </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section {
  background-image: linear-gradient(
      to right bottom,
      rgb(57, 77, 255) 35%,
      rgb(255, 62, 72) 100%
    ),
    url("../assets/images/banner14-2x.jpg");
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  padding: 15rem 0;
  position: relative;
  color: white;

  .container {
    @include flexMC("center", "center");
    flex-direction: column;
    text-align: center;
  }

  .play{
    top: 25%;
    padding: 2rem 2.5rem;
  }

  h3 {
    font-size: 3.5rem;
  }

  span {
    font-size: 2.2rem;
    font-weight: 500;
    color: $color-yellow;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.3s all;

    &:hover {
      color: $color-dodgerBlue;
    }

    & i {
      margin: 0 0.5rem;
    }
  }
}
</style>
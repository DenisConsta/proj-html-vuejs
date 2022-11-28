<script>
import AppButton from "./partials/AppButton.vue";

export default {
  name: "AppHero",
  components: {
    AppButton,
  },
  props: {
    obj: Object,
  },
};
</script> 

<template>
  <section class="bg-overlay">
    <div class="overlay"></div>

    <div class="container h-100">
      <div class="row h-100">
        <!-- ? Left col -->
        <div class="col">
          <h3 class="my-red">{{ obj.subtitle }}</h3>
          <h1>{{ obj.title }}</h1>
          <p>{{ obj.text }}</p>

          <!-- ? Buttons -->
          <div class="buttons">
            <AppButton
              v-for="(btn, index) in obj.btns"
              :key="index"
              :class="btn.classes"
              :text="btn.text"
              :beforeIcon="btn.before"
              :afterIcon="btn.after"
            />
          </div>
        </div>

        <!-- ? Right col -->
        <div class="col d-none d-xl-block position-relative">
          <div class="play">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;



section {
  height: 670px;
  background-image: url("../assets/images/slider82x-scaled.jpg");
  overflow: hidden;
  color: white;

  .container .row > * {
    @include flexMC("center", "start");
    flex-direction: column;
    gap: 2rem;
    z-index: 1;
  }

  h1 {
    font-size: 3.8rem;
    white-space: nowrap;
  }
  .buttons {
    @include flexMC("start", "center");
    gap: 1rem;
  }
}
</style>
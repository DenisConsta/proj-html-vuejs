<script>
import AppButton from "./partials/AppButton.vue";

export default {
  name: "AppHero",
  components: {
    AppButton,
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
          <h3 class="my-red">Certified fitness professional</h3>
          <h1>Take control of your health</h1>
          <p>
            Curatibur non nulla sit amet nisi tempus convallis quis ac lectus
            dolor sit amet.
          </p>

          <!-- ? Buttons -->
          <div class="buttons">
            <AppButton
              text="Visit my YouTube channel"
              beforeIcon="fa-brands fa-youtube"
            >
            </AppButton>
            <AppButton
              class="uncolored"
              text="Buy Avanda today"
              afterIcon="fa-solid fa-arrow-right"
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

section *{
  border: 1px solid firebrick;
}

section {
  height: 670px;
  background-image: url("../assets/images/slider82x-scaled.jpg");


  color: white;

  .container .row > * {
    @include flexMC("center", "start");
    flex-direction: column;
    gap: 2rem;
    z-index: 1;
  }

  h1 {
    word-break: normal;
  }



  h1 {
    font-size: 3.8rem;
  }
  .buttons {
    @include flexMC("start", "center");
    gap: 1rem;
  }

  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    cursor: pointer;

    padding: 2rem 2.3rem;
    border-radius: 50%;

    color: $color-dodgerBlue;
    background-color: white;
  }
}
</style>
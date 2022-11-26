<script>

import AppButton from './partials/AppButton.vue';

export default {
  name: "AppChannel",
  components: {
    AppButton,
  },
};
</script>

<template>
  <section>
    <!-- ? top -->
    <div class="top debug">
      <div class="container-fluid debug h-100">
        <div class="row row-cols-1 row-cols-lg-2 h-100 debug">
          <!-- ? Img col -->
          <div class="col debug my-radius img-col">
            <!-- ? Overlay -->
            <div class="overlay"></div>

            <!-- ? Play button -->
            <div class="play">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>

          <!-- ? text col -->
          <div class="col debug">
            <h5 class="my-dodger">Tune up your workouts</h5>
            <h2>The best health & fitness advice online</h2>
            <!-- ? Channel -->
            <div class="channel">
              <img src="../assets/images/unnamed.jpg" alt="" />
              <div class="text">
                <span>ThemeFusion</span>
                <AppButton
                  class="btn-lite"
                  text="YouTube"
                  beforeIcon="fa-brands fa-youtube"
                />
              </div>
            </div>

            <p>
              Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper
              mauris, venenatis, leo integer sit pellentesque.
            </p>

            <AppButton
              class="youtube-red"
              text="Visit my YouTube channel"
              beforeIcon="fa-brands fa-youtube"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;
.top {

  .col:last-of-type {
    flex-direction: column;
    @include flexMC("start", "start");
    padding: 9rem 7rem;
    gap: 2rem;
  }
  .img-col {
    background-image: url("../assets/images/service15-2x.jpg");
    background-position: center;
    background-size: cover;
    margin-top: -3.5rem;
    position: relative;
    min-height: 500px;

    .overlay {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0.23) 60%
      );
      border-bottom-right-radius: 3rem;
    }
  }

  .btn-lite {
    background-color: $color-red;
    padding: 0.2rem 0.4rem;
    border-radius: 0;
    font-size: 0.8rem;
  }

  .youtube-red {
    background-color: $color-red;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.8rem 2.5rem;
  }

  .channel {
    @include flexMC("center", "center");
    gap: 0.8rem;

    .text {
      @include flexMC("center", "start");
      flex-direction: column;
      span {
        font-size: 0.8rem;
        padding-bottom: 0.3rem;
      }
    }
  }

  h5 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.2rem;
    color: $color-jumbo;
  }
}
</style>
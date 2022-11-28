<script>
import AppButton from "./partials/AppButton.vue";

export default {
  name: "AppChannel",
  components: {
    AppButton,
  },
  props: {
    obj: Object,
  },
};
</script>

<template>
  <section>
    <!-- ? top -->
    <div class="top ">
      <div class="container-fluid  h-100">
        <div class="row row-cols-1 row-cols-lg-2 h-100 ">
          <!-- ? Img col -->
          <div class="col  my-radius img-col">
            <!-- ? Overlay -->
            <div class="overlay"></div>

            <!-- ? Play button -->
            <div class="play">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>

          <!-- ? text col -->
          <div class="col ">
            <h5 class="my-dodger">{{ obj.subtitle }}</h5>
            <h2>{{ obj.title }}</h2>
            <!-- ? Channel -->
            <div class="channel">
              <img :src="`/src/assets/images/${obj.channel.logo}`" alt="" />
              <div class="text">
                <span>{{ obj.channel.name }}</span>
                <AppButton
                  :class="obj.channel.btn.classes"
                  :text="obj.channel.btn.text"
                  :beforeIcon="obj.channel.btn.before"
                />
              </div>
            </div>

            <p class="desc">{{ obj.text }}</p>

            <AppButton
              :class="obj.btn.classes"
              :text="obj.btn.text"
              :beforeIcon="obj.btn.before"
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

  .play{
    padding: 2rem 2.5rem;
  }

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
    font-size: 3.8rem;
  }
}
</style>
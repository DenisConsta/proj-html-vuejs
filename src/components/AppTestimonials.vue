<script>

import AppButton from './partials/AppButton.vue';
import AppTextCard from './partials/AppTextCard.vue';

export default {
  name: "AppTestimonials",
  components: {
    AppButton,
    AppTextCard,

  },
  props:{
    obj: Object,

  },  
};
</script>

<template>

  <!-- ? Top -->
  <section class="top bg-overlay debug">
    <div class="overlay"></div>
    <div class="container">
      <div class="text debug">
        <h2>
          “I’ve failed over and over again in my life. And that is why I
          succeed.”
        </h2>

        <p>
          Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In
          lacinia lacus donec sed massa in ipsum eros, tristique. Gravida
          suspendisse etiam in iaculis
        </p>

        <AppButton text="Buy Avada today" afterIcon="fa-solid fa-chevron-right"/>

      </div>
    </div>
  </section>

  <!-- ? Bottom -->
  <section class="bottom debug">

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div v-for="(card, index) in obj" :key="index" class="col debug">
          <AppTextCard :info="card"/>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section{
  padding: 4rem 0;

}

.top {
  background-image: url("../assets/images/banner2-2x.jpg");
  background-position: center;
  position: relative;

  color: white;
}

.bottom{
  color: black;
}
.container {
  @include flexMC("center", "center");
  height: 100%;
  z-index: 1;

  .text {
    /* padding: 13rem 0; */
    padding: 13rem 18%;
    z-index: 10;
    text-align: center;

    h2 {
      font-size: 3.5rem;
      margin-bottom: 1.4rem;
    }

    p{
      font-size: 1.4rem;
      color: lightgray;
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 15%,
    rgba(0, 0, 0, 0.75) 75%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
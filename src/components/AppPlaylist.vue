<script>
import AppCard from "./partials/AppCard.vue";
import { store } from "../data/store";

export default {
  name: "AppPlaylist",
  components: {
    AppCard,
  },
  props: {
    obj: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <div class="container ">
      <div class="row row-cols-1 row-cols-lg-3 ">

        <!-- ? Col -->
        <div v-for="(card, index) in obj.cards" :key="index" class="col">
          <AppCard :info="card" />
        </div>
      </div>

      <!-- ? Testimonial -->
      <div class="testimonial">
        <h2>{{ obj.blockquote }}</h2>

        <!-- ? Avatar -->
        <div class="avatar">
          <img :src="`/src/assets/images/${obj.avatar.image}`"  alt="" />
          <h5>{{ obj.avatar.name }}</h5>
          <h6>{{ obj.avatar.location }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section {
  background-image: linear-gradient(to right bottom, #0219ea, #d3000c);

  .container {
    height: 100%;
    color: white;
  }

  .row {
    position: relative;
    top: -80px;

    & .col {
      margin-bottom: 2rem;
    }
  }
  .testimonial {
    padding-bottom: 12rem;
    h2 {
      text-align: center;
      font-size: 3rem;
      padding: 2rem 8rem;
      margin-bottom: 1.5rem;
    }
    .avatar {
      @include flexMC("center", "center");
      gap: 1rem;
      img {
        height: 4rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
    }
  }
}
</style>
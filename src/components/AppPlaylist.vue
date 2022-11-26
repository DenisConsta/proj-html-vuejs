<script>
import AppCard from "./partials/AppCard.vue";
import { store } from "../data/store";

export default {
  name: "AppPlaylist",
  components: {
    AppCard,
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
    <div class="container debug">
      <div class="row row-cols-1 row-cols-lg-3 debug">
        <div class="col">
          <AppCard :info="store.firstCard" />
        </div>
        <div class="col">
          <AppCard :info="store.secondCard" />
        </div>
        <div class="col">
          <AppCard :info="store.thirdCard" />
        </div>
      </div>

      <!-- ? Testimonial -->
      <div class="testimonial">
        <h2>
          "How you respond to the challenge in the second half will determine
          what you become after the game, whether you are a winner or a loser."
        </h2>

        <!-- ? Avatar -->
        <div class="avatar">
          <img src="../assets/images/avatar-1-2x.jpg" alt="" />
          <h5>Brad Johnson</h5>
          <h6>Las Vegas</h6>
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
<script>
import AppButton from "./partials/AppButton.vue";
import AppCard from "./partials/AppCard.vue";
import { store } from "../data/store";
export default {
  name: "AppLatestsArticles",
  components: {
    AppButton,
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
  <section class="debug">
    <div class="container">
      <div class="top-text">
        <h3>Featured playlists</h3>
        <span>View all videos <i class="fa-solid fa-chevron-right"></i></span>
      </div>
      <div class="row row-cols-1 row-cols-lg-3">
        <div class="col debug">
          <AppCard class="custom" :info="store.firstPlaylist" />
          <div class="col-text">
            <h3>Thighs & glute workout</h3>
            <span class="my-dodger">Increase your mobility</span>
          </div>
        </div>
        <div class="col debug">
          <AppCard class="custom" :info="store.secondPlaylist" />
          <div class="col-text">
            <h3>Lift, firm & perk up</h3>
            <span class="my-dodger">Feel young again</span>
          </div>
        </div>
        <div class="col debug">
          <AppCard class="custom" :info="store.thirdPlaylist" />
          <div class="col-text">
            <h3>Silm & trim your waist</h3>
            <span class="my-dodger">Shed those extra pounds</span>
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
    padding: 8rem 0;
    .top-text {
      @include flexMC("between", "start");
      padding-bottom: 2rem;
    }

    .custom {
      min-height: 250px;
      margin-bottom: 2rem;
    }

    .col-text {
      flex-direction: column;
      @include flexMC("center", "center");
    }

    .col {
      margin-bottom: 2rem;
    }

  @media screen and (min-width: 1000px) {
  }
}
</style>
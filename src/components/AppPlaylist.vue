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
          <!--           <AppCard :image="`url(${store.firstCardImg})` "  />
  
 -->
          <AppCard :info="store.firstCard" />
        </div>
        <div class="col">
          <AppCard :info="store.secondCard" />
        </div>
        <div class="col">
          <AppCard :info="store.thirdCard" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section {
  height: 1015px;
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
}
</style>
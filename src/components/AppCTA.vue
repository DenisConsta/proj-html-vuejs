<script>
import AppButton from "./partials/AppButton.vue";
import AppTextCard from "./partials/AppTextCard.vue";
import { store } from "../data/store";

export default {
  name: "AppCTA",
  components: {
    AppButton,
    AppTextCard,
  },
  props:{
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
    <!-- ? Top -->
    <div class="top bg-overlay">
      <div class="overlay"></div>
      <div class="container ">
        <div class="row">
          <div class="col-auto col-lg-8 ">
            <h3 class="my-red">{{obj.subtitle}}</h3>
            <h2 class="sectionTitle">{{obj.title}}</h2>
            <!-- ? Input-form -->
            <div class="my-input-form w-100 ">
              <input
                type="text"
                class="my-input"
                placeholder="insert your email ...*"
              />
              <AppButton class="p-6" :text="obj.btn.text" />
            </div>
            <p class="desc">
              {{obj.text}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ? Bottom -->
    <div class="bottom">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-3">
          <div v-for="(card, index) in obj.textCards" :key="index" class="col">
            <AppTextCard :info="card" />
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
  .top {
    background-image: url("../assets/images/banner1-2x.jpg");
    padding: 8rem 0;
    .container {
      height: 100%;
      color: black;
      padding-bottom: 3rem;
    }
    .container .row > * {
      @include flexMC("center", "start");
      flex-direction: column;
      gap: 2rem;
      z-index: 1;
      color: white;
    }
    .my-input {
      width: 75%;
      padding: 0.8rem 1.5rem;
      border-radius: 2rem;
      border: none;
    }
    .p-6 {
      padding: 0.8rem 10%;
    }
    .my-input-form {
      @include flexMC("start", "center");
      gap: 2rem;
    }
  }
  .bottom{
    background-color: black;
    color: white;
    padding: 7rem 0;
  }
}
</style>
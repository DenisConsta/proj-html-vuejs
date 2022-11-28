<script>
import AppButton from "./partials/AppButton.vue";
import AppCard from "./partials/AppCard.vue";
import { store } from "../data/store";
export default {
  name: "AppArticlesPlaylists",
  components: {
    AppButton,
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
  <section class="">
    <div class="container">
      <!-- ? Top text -->
      <div class="top-text">
        <h3>{{ obj.sectionTitle }}</h3>
        <span
          >{{ obj.sectionSpan }}<i class="fa-solid fa-chevron-right"></i
        ></span>
      </div>

      <!-- ? Row -->
      <div class="row row-cols-1 row-cols-lg-3">
        <!-- ? Col -->
        <div
          v-for="(art, index) in obj.records"
          :key="index"
          class="col "
        >
          <AppCard class="custom" :info="art.card" />
          <!-- ? Col text -->
          <div :class="[{'article' : obj.sectionType === 'article'}, {'playlist' : obj.sectionType === 'playlist'}]">
            <h3>{{ art.title }}</h3>
            <span>{{ art.subtitle }}</span>
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

    &>h3{
      font-size: 1.5rem;
    }

    &>span{
      font-size: 1.1rem;
      font-weight: 500;
      transition: .3s all;
      cursor: pointer;
      &:hover{
        color: $color-dodgerBlue;
      }

      & i{
        margin-left: .5rem;
        font-size: .8rem;
      }

    }
  }

  .article{
    padding: 0 1.2rem;

    span{
      font-size: 1rem;
      font-weight: 300;
    }
  }

  .playlist{
    @include flexMC('center', 'center');
    flex-direction: column;

    h3{
      font-size: 1.5rem;
    }

    span{
      font-size: 1.1rem;
      font-weight: 500;
      color: $color-dodgerBlue;
    }
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
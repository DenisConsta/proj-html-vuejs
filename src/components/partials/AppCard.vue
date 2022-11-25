<script>
export default {
  name: "AppCard",
  props: {
    info: {
      title: String,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>


<template>
  <div class="my-card debug my-radius">
    <img
      class="my-radius"
      v-show="info.image != null"
      :src="`/src/assets/images/${info.image}`"
      alt=""
    />
    <div class="overlay my-radius"></div>
    <div class="text">
      <h3>{{ info.title }}</h3>
      <h4>{{ info.subtitle }}</h4>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixin" as *;


.my-card {
  min-height: 435px;
  padding: 2.5rem;
  flex-direction: column;
  position: relative;
  @include flexMC("end", "start");

  img {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top left;
    width: 100%;
    height: 100%;
  }

  .overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.5) 60%
    );
  }

  .text {
    z-index: 1;

    h4 {
      color: $color-yellow;
    }
  }
}
</style>
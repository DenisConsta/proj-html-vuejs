<script>
export default {
  name: "AppCard",
  props: {
    info: {
      default: () => ({}),
    },
  },
};
</script>

<template>
  <div class="my-card" :class="{ 'my-radius': info.radius }">
    <div class="hover-effect" :class="{ 'my-radius': info.radius }"></div>
    <img
      :class="{ 'my-radius': info.radius }"
      v-show="info.image != null"
      :src="`/src/assets/images/${info.image}`"
      alt=""
    />
    <div
      v-show="info.overlay"
      class="overlay"
      :class="{ ' my-radius': info.radius }"
    ></div>
    <div v-show="info.play" class="play">
      <i class="fa-solid fa-play"></i>
    </div>
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
  cursor: pointer;

  &:hover {
    .hover-effect {
      position: absolute;
      bottom: 0;
      left: 0;
      top: 0;
      right: 0;
      background: linear-gradient(
        to bottom,
        rgba(40, 97, 255, 0.15) 25%,
        rgb(53, 39, 255, 0.4) 60%
      );
      z-index: 10;
    }
  }

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
    z-index: 100;

    h4 {
      color: $color-yellow;
    }
  }
}
</style>
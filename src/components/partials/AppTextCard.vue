<script>
export default {
  name: "AppTextCard",
  props: {
    info: Object,
    /* {
      default: () => ({}),
    }, */
  },
};
</script>

<template>
  <div
    v-if="info.type === 'bordered'"
    :class="[{ bordered: info.type === 'bordered' }]"
  >
    <i v-show="info.icon != null" :class="info.icon"></i>
    <h2 v-show="info.title != null">{{ info.title }}</h2>
    <h3 v-show="info.subtitle != null">{{ info.subtitle }}</h3>
    <p v-show="info.desc != null">{{ info.desc }}</p>
    <a v-show="info.anchor != null" href="#">
      {{ info.anchor }}
      <i class="fa-solid fa-chevron-right"></i>
    </a>
  </div>

  <div
    v-else-if="info.type === 'unbordered'"
    :class="[{ unbordered: info.type === 'unbordered' }]"
  >
  <!-- :src="`/src/assets/images/${info.image}}`" -->
    <img :src="`/src/assets/images/${info.image}`" alt="">
    <p>{{info.text}}</p>
    <a v-show="info.anchor != null" href="#">
      {{ info.anchor }}
      <i class="fa-solid fa-chevron-right"></i>
    </a>

  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixin" as *;

div {
  @include flexMC("center", "center");
  flex-direction: column;
  text-align: center;
  padding: 5rem 2.6rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  height: 550px;

  .bordered {
    border: 5px solid $color-dodgerBlue;

    & > i {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 3rem;
      font-size: 1.5rem;
      color: $color-yellow;
    }

    p {
      margin-bottom: 2rem;
      font-size: 1.25rem;
      color: lightgrey;
    }

    a {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      transition: .3s all;

      &:hover{
        color: $color-dodgerBlue;
      }

      & i {
        font-size: 0.8rem;
        margin: 0 0.5rem;
      }
    }
  }
  .unbordered {
    color: black;
    height: 350px;

    img{
      max-height: 5rem;
      margin-bottom: 1.2rem;
    }

    p{
      font-size: 1.1rem;
      color: $color-jumbo;
    }

    a{
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
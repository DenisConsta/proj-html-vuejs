<script>
import AppButton from "./partials/AppButton.vue";

export default {
  name: "AppHeader",
  components: {
    AppButton,
  },
  props:{
    obj: Object,

  }
};
</script>

<template>
  <!--?= Header -->
  <header>
    <div class="container">
      <!-- ? Nav -->
      <nav>
        <!--? Logo -->
        <div class="logo">
          <img :src="`/src/assets/images/${obj.logo}`" alt="" />
        </div>

        <!-- ? nav-items -->
        <div class="nav-items">
          <!-- ? Links -->
          <div class="links d-none d-lg-block">
            <ul>
              <li v-for="(item, index) in obj.menu" :key="index"><a :class="{'active' : item.isActive}" href="#" class="text-capitalize">{{item.text}}</a></li>
            </ul>
          </div>

          <!-- ? Button -->
          <AppButton class="d-none d-sm-block" :text="obj.textBtn" />

          <!-- ? Icons -->
          <i v-for="(icon, i) in obj.icons" :key="i" :class="icon"></i>
          
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

header {
  background-color: $color-codGrey;
  color: white;

  nav {
    padding: 1.6rem 0;
    @include flexMC("between", "center");

    .logo {
    @include flexMC("center", "center");

      img {
        max-height: 2.5rem;
        max-width: 14rem;
      }
    }

    .nav-items {
      gap: 2rem;
      @include flexMC("center", "center");

      ul {
        @include reset-list;
        @include flexMC("center", "center");
        gap: 2rem;
        
        li{
          font-weight: 500;
        }
      }



      li a,
      i {
        cursor: pointer;
        color: $color-silver;
        &.active,
        &:hover {
          color: $color-white;
        }
      }
    }
  }
}
</style>
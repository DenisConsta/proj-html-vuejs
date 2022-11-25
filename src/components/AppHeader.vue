<script>
import AppButton from "./partials/AppButton.vue";

export default {
  name: "AppHeader",
  components: {
    AppButton,
  },
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
          <img src="../../src/assets/images/logo-2x.png" alt="" />
        </div>

        <!-- ? nav-items -->
        <div class="nav-items">
          <!-- ? Links -->
          <div class="links d-none d-lg-block">
            <ul>
              <li><a class="active" href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Store</a></li>
            </ul>
          </div>

          <!-- ? Button -->
          <AppButton class="d-none d-sm-block" text="Schedule a workout" />

          <!-- ? Icons -->
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
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
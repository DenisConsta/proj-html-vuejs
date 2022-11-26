<script>
export default {
  name: "AppCTA",
};
</script>

<template>
  <section class="bg-overlay">
    <div class="overlay"></div>

    <!-- ? Top -->
    <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-auto">
            <h3>Join our mailing list today</h3>
            <h2>Insider offers & flash sales in your inbox every week</h2>
            <input type="text" class="my-input" placeholder="insert your email ...*">
          </div>
        </div>
      </div>
    </div>

    <!-- ? Bottom -->
    <div class="bottom"></div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section {
  height: 730px;
  background-image: url("../assets/images/banner1-2x.jpg");
}
.container {
  height: 100%;
  color: black;
}

.container .row > * {
  @include flexMC("center", "start");
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  color: white;
}

.my-input{
  width: 90%;
  padding: 1rem;
  border-radius: 2rem;
  border: none;
}
</style>
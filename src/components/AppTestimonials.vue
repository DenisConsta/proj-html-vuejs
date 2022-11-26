<script>
export default {
  name: "AppTestimonials",
};
</script>

<template>
  <section class="bg-overlay">
    <div class="overlay"></div>

  
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;




section {



  color: white;
}
.container {
  @include flexMC("center", "center");
  height: 100%;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 1) 60%
  );
}
</style>
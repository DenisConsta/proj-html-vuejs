<script>
export default {
  name: "AppFooter",
  props: {
    obj: Object,
  },
};
</script>

<template>
  <footer>
    <!-- ? Top -->
    <div class="top">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-3">
          <!-- ? Left -->
          <div class="col">
            <img :src="`/src/assets/images/${obj.left.logo}`" alt="" />
            <p>{{ obj.left.text }}</p>
            <div class="icons">
              <i
                v-for="(icon, index) in obj.left.icons"
                :key="index"
                :class="icon"
              ></i>
            </div>
          </div>

          <!-- ? center -->
          <div class="col">
            <h3 class="text-uppercase">{{ obj.center.title }}</h3>
            <ul>
              <li v-for="(item, index) in obj.center.list" :key="index">
                <i class="fa-solid fa-chevron-right"></i> {{ item }}
              </li>
            </ul>
          </div>

          <!-- ? right -->
          <div class="col">
            <h3 class="text-uppercase">{{ obj.right.title }}</h3>
            <span>{{obj.right.address}}</span>
            <span>{{obj.right.mobile}}</span>
            <span>{{obj.right.email}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ? Bottom -->
    <div class="bottom">
      <h5>{{obj.copyright}}</h5>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

footer {
  background-color: $color-codGrey;

  .top {
    color: white;
    padding: 10rem 0 5rem 0;
    .col {
      @include flexMC("center", "center");
      flex-direction: column;
      text-align: center;
      margin-bottom: 5rem;
    }

    p{
      font-size: 1.3rem;
      color: lightgrey;
      margin-bottom: 3rem;
    }

    img {
      max-height: 100%;
      max-width: 100%;
      margin-bottom: 3rem;
    }

    h3{
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }

    ul{
      list-style: none;
      margin: 0;
      padding: 0;
      
      li{
        margin-bottom: 1rem;
        font-size: 1.15rem;      
        cursor:pointer;
      }
    }

    span {
      font-size: 1.3rem;
    }

    span:first-of-type{
      color: lightgrey;
      margin-bottom: 1.3rem;
    }

    span:not(span:first-of-type){
      font-weight: 500;
    }

    .icons {
      @include flexMC("center", "center");
      gap: 1rem;
      color: $color-burntSienna;
      cursor:pointer;
      
    }
  }
  .bottom {
    border-top: 1px solid darken($color-jumbo, 30%);
    @include flexMC("center", "center");
    color: white;
    padding: 3rem 0;
  }
}
</style>
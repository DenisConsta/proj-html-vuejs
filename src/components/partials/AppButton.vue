
<script>
export default {
  name: 'AppButton',
  props:{
    text: String,
    beforeIcon: String,
    afterIcon: String,
  },
}
</script>

<template>

  <button> 
    <i v-show="beforeIcon != null" :class="beforeIcon"></i>
    <span>{{text}}</span>
    <i v-show="afterIcon != null " :class="afterIcon"></i>
  </button>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixin' as *;

button{ 
  border: none;
  background-color: $color-dodgerBlue;
  color: white;
  border-radius: 1.6rem;
  padding: .8rem 2rem;
  transition: .3s all;
  /* rivedere */

  span{
    padding: 0 .75rem;
  }

  i{
    font-size: .9rem;
  }

  &:hover{
    background-color: $color-burntSienna;
  }

  &.uncolored {
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid darken($color-jumbo, 30%);
  transition: .3s all;
  &:hover{
    background-color: white;
    color: black;
  }
}
}


</style>
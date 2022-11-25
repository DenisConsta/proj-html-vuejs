
<script>
export default {
  name: 'AppButton',
  props:{
    text: String,
    beforeIcon: String,
    afterIcon: String,
  },
  methods:{

  },
  computed:{
    
    
  }

}
</script>

<template>

  <button> 
    <i v-show="beforeIcon != null" :class="beforeIcon"></i>
    {{text}} 
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

  /* rivedere */

  i:first-of-type{
    margin-right: .3rem;
  }

  i:last-of-type{
    margin-left: .3rem;
  }

}


</style>
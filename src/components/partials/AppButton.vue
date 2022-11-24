
<script>
export default {
  name: 'AppButton',
  props:{
    text: String,

  }
}
</script>

<template>

  <button> {{text}} </button>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

button{
  border: none;
  background-color: $color-dodgerBlue;
  color: white;
  border-radius: 1.2rem;
  padding: .8rem 1.6rem;
}


</style>
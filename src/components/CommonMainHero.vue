<template>  
  <div class="main-hero">
    <h3 class="main-hero__title">Лучшие фильмы</h3>
    <div class="main-hero__content">      
      <hero-swiper />              
      <div class="main-hero__content-aside">

      </div>
    </div>    
  </div>  
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
  .main-hero {
    &__title {
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 120%;

    letter-spacing: 0.05em;
  }
  &__content {
    display: flex;
  }
}
</style>
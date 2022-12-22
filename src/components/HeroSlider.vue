<template>  
  <div class="main-hero">
    <h3 class="main-hero__title">Лучшие фильмы</h3>
    <div class="main-hero__content">      
      <hero-swiper />              
      <div class="main-hero__content-aside">
        <ul class="list-content">
          <li
            v-for="item in listContentItems"
            :key="item.id"            
            class="common-header__menu-item"
          >
           <img :src="item.url" :alt="item.alt">
          </li>
        </ul>
      </div>
    </div>    
  </div>  
</template>

<script lang="ts" setup>
import { ref } from "vue";

 const listContentItems: {id: number; alt: string; url: string }[] = [
  {   
    id: 0,
    alt: "iconca1",
    url: "./src/assets/icons/instagramIcon.svg",
  },
  {
    id: 1,
    alt: "3",
    url: "./src/assets/icons/in.svg",
  },
  {
    id: 2,
    alt: "2",
    url: "./src/assets/icons/telegram.svg",
  }
]
</script>

<style lang="scss" scoped>
  .main-hero {
    border: 1px solid blue;

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
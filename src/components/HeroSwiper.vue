<template>
  <div>
    <div class="main-slider-inner">
      <swiper
        :slides-per-view="2.7"
        :space-between="22"
        :width="1200"
        :height="545"
        :loop-fill-group-with-blank="true"
        :pagination="{
          el: '.main-slider__pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }"
        :navigation="{
          nextEl: '.main-slider__arrow-next',
          prevEl: '.main-slider__arrow-prev',
        }"
        class="main-slider swiper"
      >
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie1.jpg"
            alt="movie"
        /></swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie2.jpg"
            alt="movie"
        /></swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie1.jpg"
            alt="movie"
        /></swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie2.jpg"
            alt="movie"
        /></swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie1.jpg"
            alt="movie"
        /></swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie2.jpg"
            alt="movie"
        /></swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            class="swiper-slide__image"
            src="../assets/movie1.jpg"
            alt="movie"
        /></swiper-slide>
      </swiper>
      <div class="main-slider__arrow-next">
        <img src="../assets/arrow.png" alt="arrow" />
      </div>
    </div>
    <div class="main-slider__pagination"></div>
  </div>
</template>

<script lang="ts" setup scoped>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const lastSlide = ref(null);
const currentSlide = ref(null);
</script>

<style lang="scss">
.swiper {
  width: 1280px;
  height: 600px;
}
.swiper-slide {
  margin: 0px;
  min-width: 465px;
  height: 560px;

  &__image {
    width: 100%;
  }
}
.main-slider {

  &__arrow-next {
    margin-left: 30px;
    display: flex;
    transform: rotate(180deg);
  }

  &__pagination {
    padding-left: 50%;
  }
}
.main-slider-inner {
  width: 1200px;
  height: 580px;
  display: flex;
  align-items: center;
}
</style>

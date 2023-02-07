<template>
  <div class="main-slider__arrow-prev">
    <img src="../assets/arrow.png" alt="arrow" />
  </div>
  <swiper
    :slides-per-view="3.5"
    :space-between="19"
    :width="1440"
    :height="200"
    :loop-fill-group-with-blank="true"
    :navigation="{
      nextEl: '.main-slider__arrow-next',
      prevEl: '.main-slider__arrow-prev',
    }"
  >
    <swiper-slide>Название</swiper-slide>
    <swiper-slide>Топ 100</swiper-slide>
    <swiper-slide>Аниме</swiper-slide>
    <swiper-slide>Название</swiper-slide>
    <swiper-slide>Топ 200</swiper-slide>
    <swiper-slide>Хентай</swiper-slide>
  </swiper>
  <div class="main-slider__arrow-next">
    <img src="../assets/arrow.png" alt="arrow" />
  </div>
</template> 

<script lang="ts" setup>
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
  width: 467px !important;
  height: 200px !important;
  background-color: #C4C4C4;
  text-align: center;
  &__image {
    width: 100%;
  }
}
.main-slider {
  &__arrow-next {
    margin-left: 30px;
    display: flex;
  }
}
.main-slider__pagination {
  padding-left: 50%;
}
.main-slider-inner {
  width: 1200px;
  height: 580px;
  display: flex;
  align-items: center;
}
</style>
  
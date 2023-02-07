<template>
  
  <swiper
    :slides-per-view="3"
    :navigation="{
      nextEl: '.popular-slider__arrow-next',
      prevEl: '.popular-slider__arrow-prev',
    }"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
  <div class="popular-slider__arrow-next">
    <img src="@/assets/arrow.png" alt="arrow" />
  </div>
  <div class="popular-slider__arrow-next">
    <img src="@/assets/arrow.png" alt="arrow" />
  </div>
</template> 

<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const lastSlide = ref(null);
const currentSlide = ref(null);
</script>
  
<style lang="scss">
.swiper-slide {
  background-color: #c4c4c4;
}
</style>
  
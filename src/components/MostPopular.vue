<template>
  <swiper
    :slides-per-view="3"
    :space-between="20"
    :width="1440"
    :height="200"
    :navigation="{
      nextEl: '.popular-slider__arrow-next',
      prevEl: '.popular-slider__arrow-prev',
    }"
    class="popular-swiper"
  >
    <swiper-slide v-for="item in 6" :key="item" class="swiper-slide__popular">{{
      item
    }}</swiper-slide>
  </swiper>
  <div class="popular-slider__arrow-prev">
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
.most-popular {
  &__inner {
    height: 200px;
  }
}
.popular-swiper {
  width: 1440px !important;
  height: 200px !important;
  display: flex;
  margin: 0;
  // position: absolute;
}
.swiper-slide {
  background-color: #c4c4c4;
  width: 467px;
  height: 200px !important;
  &__popular {
    color: #000;
  }
}
.popular-slider {
  &__arrow-prev {
    position: relative;
    z-index: 5;
    left: -40px;
    top: -120px;
  }
  &__arrow-next {
    position: relative;
    z-index: 5;
    left: 15px;
    top: -160px;
    transform: scale(-1, 1);
  }
}
</style>
  
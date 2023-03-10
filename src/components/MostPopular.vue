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
    <swiper-slide v-for="item in 6" :key="item" class="swiper-slide__popular">{{ item }}</swiper-slide>
  </swiper>
  <div class="popular-slider__arrow-prev">
    <img src="@/assets/arrow.png" />
  </div>

  <div class="popular-slider__arrow-next">
    <img src="@/assets/arrow.png" />
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])
</script>

<style lang="scss" scoped>
.most-popular {
  &__inner {
    height: 200px;
  }
}

.popular-swiper {
  width: 1440px;
  height: 200px;
  display: flex;
  margin: 0;
}

.swiper-slide {
  width: 467px;
  height: 200px;
  background-color: #c4c4c4;

  &__popular {
    color: #000;
  }
}

.popular-slider {
  &__arrow-prev {
    top: -120px;
    left: -40px;
    position: relative;
    z-index: 5;
  }

  &__arrow-next {
    top: -160px;
    left: 15px;
    position: relative;
    transform: rotate(3.142rad);
    z-index: 5;
  }
}
</style>

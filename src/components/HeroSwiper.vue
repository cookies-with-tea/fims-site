<template>
  <div>
    <div class="main-slider-inner">
      <!-- <div class="main-slider__arrow-prev"><img src="../assets/arrow.png" alt="arrow" /></div>  -->
      <swiper
        :slidesPerView="2.5"
        :spaceBetween="22"
        :width="1197"
        :height="543"
        :loopFillGroupWithBlank="true"
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
        <swiper-slide
          >Slide 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos iusto ullam quis ratione molestias nostrum dolorem
          inventore corrupti maiores eos.</swiper-slide
        >
        <swiper-slide
          >Slide 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
          sapiente possimus quis, sunt esse veritatis.</swiper-slide
        >
        <swiper-slide
          >Slide 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          quaerat cumque totam nostrum sit nobis fugiat ullam pariatur labore
          nihil.</swiper-slide
        >
        <swiper-slide
          >Slide 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos iusto ullam quis ratione molestias nostrum dolorem
          inventore corrupti maiores eos.</swiper-slide
        >
        <swiper-slide
          >Slide 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
          sapiente possimus quis, sunt esse veritatis.</swiper-slide
        >
        <swiper-slide
          >Slide 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          quaerat cumque totam nostrum sit nobis fugiat ullam pariatur labore
          nihil.</swiper-slide
        >
      </swiper>
      <div class="main-slider__arrow-next">
        <img src="../assets/arrow.png" alt="arrow" />
      </div>
    </div>
    <div class="main-slider__pagination"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
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
  background: url("./src/assets/movie1.jpg") no-repeat;
  width: 465px;
  height: 560px;
}

.main-slider {
  &__arrow-prev {
    display: flex;
  }
  
}
.main-slider__pagination {
  padding-left: 50%;
}
.main-slider-inner {
  display: flex;
  align-items: center;
}
</style>

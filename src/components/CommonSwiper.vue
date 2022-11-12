<template>
  <div>
    <swiper
          :slidesPerView="3"
          :spaceBetween="40"
          :loopFillGroupWithBlank="true"
          :pagination="{
            el: '.main-slider__fractions',
            type: 'custom',
            }"
          :navigation="{
          nextEl: '.main-slider__arrow-next',
          prevEl: '.main-slider__arrow-prev'
        }"
          class="main-slider swiper"
    >
      <swiper-slide>Slide 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto ullam quis ratione molestias nostrum dolorem inventore corrupti maiores eos.</swiper-slide>
      <swiper-slide>Slide 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sapiente possimus quis, sunt esse veritatis.</swiper-slide>
      <swiper-slide>Slide 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quaerat cumque totam nostrum sit nobis fugiat ullam pariatur labore nihil.</swiper-slide>
      <swiper-slide>Slide 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto ullam quis ratione molestias nostrum dolorem inventore corrupti maiores eos.</swiper-slide>
      <swiper-slide>Slide 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sapiente possimus quis, sunt esse veritatis.</swiper-slide>
      <swiper-slide>Slide 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quaerat cumque totam nostrum sit nobis fugiat ullam pariatur labore nihil.</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";


SwiperCore.use([Pagination, Navigation]);
const lastSlide = ref(null)
const currentSlide = ref(null)


</script>
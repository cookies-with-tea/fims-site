<template>
  <div class="main-hero">
    <h3 class="main-hero__title">Лучшие фильмы</h3>
    <div class="main-hero__content">
      <hero-swiper :movies="props.movies" class="main-hero__content-swiper" />
      <div class="main-hero__content-aside">
        <ul class="list-content">
          <li v-for="item in heroSocialNetworks" :key="item.id" class="list-content__item">
            <icon-template :name="item.icon" class="icon-20" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { heroSocialNetworks } from '@/constants/mainHero'
import { MovieType } from '@/types/movie.type'

type Props = {
  movies: MovieType[]
}

const props = withDefaults(defineProps<Props>(), {
  movies: () => [],
})
</script>

<style lang="scss" scoped>
.main-hero {
  max-width: 1440px;
  max-height: 880px;

  &__title {
    font-weight: 200;
    font-style: normal;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.05em;
    margin-bottom: 18px;
  }

  &__content {
    display: flex;
  }

  &__content-swiper {
    max-width: 1254px;
    max-height: 578px;
    margin-right: 165px;
  }

  &__content-aside {
    display: flex;
    align-items: center;
  }

  .list-content {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>

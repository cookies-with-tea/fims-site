<template>
  <div class="common-footer">
    <el-row>
      <el-col :span="10">
        <nav>
          <ul class="common-footer__menu">
            <li
              v-for="item in footerMenuItems"
              :key="item.title"
              class="common-footer__menu-item"
            >
              <router-link :to="item.url">{{ item.title }}</router-link>
            </li>
          </ul>
        </nav>
      </el-col>
      <el-col :span="6">
        <div class="common-footer__logo">Логотип уехал на бали</div></el-col
      >
      <el-col :span="5">
        <div class="common-footer__content-aside">
          <ul class="list-content">
            <li
              v-for="item in heroSocialNetworks"
              :key="item.id"
              class="list-content__item"
            >
              <img :src="item.url" :alt="item.alt" />
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref } from "vue";
import {heroSocialNetworks} from "@/constants/mainHero"


const footerMenuItems: { title: string; url: string }[] = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Новинки",
    url: "/news",
  },
  {
    title: "Фильмы",
    url: "/movies",
  },
  {
    title: "Топы",
    url: "/tops",
  },
];

</script>
  
  <style lang="scss" scoped>
.common-footer {
  align-items: center;
  margin: 26px 0 122px;
  &__menu {
    display: flex;

    &-item {
      &:not(:last-child) {
        margin-right: 50px;
      }
    }
  }

  &__logo {
    margin-right: 75px;
  }

  &__search {
    width: 220px;
  }
}
</style>
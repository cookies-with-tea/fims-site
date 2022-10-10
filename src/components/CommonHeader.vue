<template>
  <div class="common-header">
    <el-row>
      <el-col :span="10">
        <nav>
          <ul class="common-header__menu">
            <li v-for="item in headerMenuItems" :key="item.title" class="common-header__menu-item">
              <router-link :to="item.url">{{item.title}}</router-link>
            </li>
          </ul>
        </nav>
      </el-col>
      <el-col :span="3">
        <div class="common-header__logo">Логотип уехал на бали</div></el-col>
      <el-col :span="6">
        <el-input v-model="searchValue" placeholder="Поиск" />
      </el-col>
      <el-col :span="5">
        <div class="grid-content ep-bg-purple-light">Your Mum</div></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const searchValue = ref('')

  const headerMenuItems: { title: string; url: string }[] = [
    { 
      title: "Главная",
      url: "/"
    },
    { 
      title: "Новинки",
      url: "/news"
    },
    { 
      title: "Фильмы",
      url: "/movies"
    },
    { 
      title: "Топы",
      url: "/tops"
    },
  ]
</script>

<style lang="scss" scoped>
  .common-header  {
    margin: 26px 0 122px;
    &__menu {
      display: flex;

      &-item {        
        &:not(:last-child) {
          margin-right: 50px;
        }

        a {
          color: #fefefe;        
        }
      }
  }

}
</style>
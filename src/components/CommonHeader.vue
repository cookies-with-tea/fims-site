<template>
  <div class="common-header">
    <el-row>
      <el-col :span="10">
        <nav>
          <ul class="common-header__menu">
            <li
              v-for="item in headerMenuItems"
              :key="item.title"
              class="common-header__menu-item"
            >
              <router-link :to="item.url">{{ item.title }}</router-link>
            </li>
          </ul>
        </nav>
      </el-col>
      <el-col :span="6">
        <div class="common-header__logo">Логотип уехал на бали</div></el-col
      >
      <el-col :span="5">
        <el-input
          v-model="searchValue"
          placeholder="Поиск"
          class="common-header__search"
        >
          <template #suffix>
            <img src="../assets/icons/lupe.svg" alt="lupe" />
          </template>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button class="common-header__button" type="primary" @click="handleDialogVisivbleChange">Вход</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{
  (e: 'open-dialog'): void
}>()

const searchValue = ref("");

const headerMenuItems: { title: string; url: string }[] = [
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

const handleDialogVisivbleChange = (): void => {
  emit('open-dialog')
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.common-header {
  align-items: center;
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

  &__logo {
    margin-right: 75px;
  }

  &__search {
    width: 220px;
  }
}
</style>
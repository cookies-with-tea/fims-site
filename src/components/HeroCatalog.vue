<template>
  <div>
    <h2 class="common-title hero-catalog__title">{{ props.title }}</h2>
    <el-scrollbar height="490px">
      <div v-for="item in 20" :key="item">
        <div class="scrollbar-demo-item hero-catalog__item">фильм</div>
        <p class="hero-catalog__item-title">Название</p>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Props = {
  title: string;
};
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 20px 20px 0 0;
  text-align: center;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.hero-catalog {
  &__item {
    width: 345px;
    height: 287px;
  }
  &__item-title {
    background-color: #9c8080;
    width: 345px;
    height: 59px;
    margin-bottom: 0px;
    text-align: center;
    padding-top: 15px;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
  }
}
.hero-catalog {
  &__title {
    margin-bottom: 50px;
  }
}
</style>
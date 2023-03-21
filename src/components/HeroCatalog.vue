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
type Props = {
  title: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--el-color-primary);
  background: var(--el-color-primary-light-9);
  margin: 20px 20px 0 0;
}

.hero-catalog {
  &__item {
    width: 345px;
    height: 287px;
  }

  &__title {
    margin-bottom: 50px;
  }

  &__item-title {
    width: 345px;
    height: 59px;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    background-color: #9c8080;
    padding-top: 15px;
    margin-bottom: 0;
  }
}
</style>

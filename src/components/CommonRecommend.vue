<template>
  <div>
    <h2 class="common-title">Наши рекомендации</h2>
    <el-scrollbar>
      <div v-for="item in 20" :key="item">
        <div class="scrollbar-item recommend-item">фильм</div>
        <p class="recommend-item__title">Название фильма</p>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.el-scrollbar {
  max-height: 490px;
}

.scrollbar-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-align: center;
  color: var(--el-color-primary);
  background: var(--el-color-primary-light-9);
  margin: 20px 20px 20px 0;
}

.recommend-item {
  width: 345px;
  height: 380px;

  &__title {
    text-align: center;
    margin-bottom: 0;
  }
}

.common-title {
  margin-bottom: 40px;
}
</style>

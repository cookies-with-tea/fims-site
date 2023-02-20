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

<script lang="ts">
</script>
  
<style lang="scss" scoped>
.el-scrollbar {
  max-height: 490px;
}
.scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 20px 20px 20px 0;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.recommend-item {
  width: 345px;
  height: 380px;
  
  &__title {
    margin-bottom: 0px;
    text-align: center;
  }
}
.common-title {
  margin-bottom: 40px;
}
</style>
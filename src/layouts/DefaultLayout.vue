<template>
  <div class="common-layout">
    <div class="container">
      <div class="common-layout__wrapper">
        <common-header @open-dialog="dialogVisibleChange" />
        <main-hero class="main-hero" />
        <common-recommend class="common-recommend" />
        <most-popular class="most-popular" />
        <!-- <main-movie /> -->
        <hero-catalog class="hero-catalog" title="Сериалы" />
        <hero-catalog class="hero-catalog" title="Фильмы" />
        <hero-catalog class="hero-catalog" title="Аниме" />
        <common-footer class="common-footer" />
      </div>
    </div>
    <authorization-dialog :visible="isAuthDialogVisible" @close-dialog="dialogVisibleChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isAuthDialogVisible = ref(false)

const dialogVisibleChange = (): void => {
  isAuthDialogVisible.value = !isAuthDialogVisible.value
}
</script>

<style scoped lang="scss">
.common-layout {
  position: relative;
  color: #fefefe;
  overflow: hidden;
  z-index: 1;
}

.common-layout::before {
  content: url('@/assets/background-image.png');
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.2;
  z-index: -1;
}

.main-hero {
  margin-bottom: 120px;
}

.common-recommend {
  margin-bottom: 120px;
}

.hero-catalog {
  margin-bottom: 120px;
}

.common-footer {
  display: flex;
}
</style>

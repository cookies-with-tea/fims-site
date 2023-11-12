<template>
  <div class="default-layout">
    <left-main-sidebar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import LeftMainSidebar from '@/components/sidebars/LeftMainSidebar.vue';
</script>

<style scoped lang="scss">
.default-layout {
  height: 100%;
  display: flex;
}
</style>

<template>
  <div class="common-layout">
    <div class="container">
      <div class="common-layout__wrapper">
        <common-header @open-dialog="dialogVisibleChange" />
        <common-swiper />
      </div>
    </div>
    <auth-dialog :visible="isAuthDialogVisible" @close-dialog="dialogVisibleChange" />    
  </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity"

const isAuthDialogVisible = ref(false)

const dialogVisibleChange = (): void => {
  isAuthDialogVisible.value = !isAuthDialogVisible.value
}
</script>
<style scoped lang="scss">
.common-layout {        
  color: #fefefe;
}
</style>

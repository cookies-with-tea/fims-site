<template>
  <div class="common-layout">
    <div class="container">
      <div class="common-layout__wrapper">
        <common-header @open-dialog="dialogVisibleChange" />
        <main-hero class="main-hero"/>
        <common-recommend class="common-recommend" />
        <most-popular class="most-popular" />
        <!-- <main-movie /> -->
        <common-footer class="common-footer" />
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
.main-hero {
  margin-bottom: 120px;
}
.common-recommend {
  margin-bottom: 120px; 
}
.common-footer {
  
}
</style>

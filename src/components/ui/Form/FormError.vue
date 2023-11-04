<template>
  <div class="form-error">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.form-error {
  border-radius: 8px;
  color: $base-color--red;
  background-color: #eb575766;
  padding: 10px 20px;
}
</style>

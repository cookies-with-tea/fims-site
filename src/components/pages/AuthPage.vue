<template>
  <div class="auth_page">
    <div class="auth_page__brand">
      <base-icon name="go" width="140" height="128" />
      <base-icon name="brand" width="177" height="72" />
    </div>
    <auth-form />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/forms/AuthForm.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
</script>

<style scoped lang="scss">
.auth_page {
  &__brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
    margin-bottom: 49px;
  }
}
</style>

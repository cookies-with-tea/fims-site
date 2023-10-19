<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.base-button {
  min-width: 180px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: $color--text-secondary;
  background-color: $color--accent;
  padding: 17px;

  &:active {
    background-color: $color--accent-alt;
  }
}
</style>

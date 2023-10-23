<template>
  <input class="base-checkbox" type="checkbox" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@supports (-webkit-appearance: none) or (-moz-appearance: none) or (appearance: none) {
  input.base-checkbox[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}

.base-checkbox {
  width: 31px;
  height: 31px;
  position: relative;
  border-radius: 8px;
  background-color: $base-color--whit;

  &:checked::before {
    content: url('src/assets/icons/daw.svg');
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 8px;
    inset: 0;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgb(39 94 254 / 0.25);
  }
}
</style>

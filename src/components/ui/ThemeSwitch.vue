<template>
  <label class="theme-switch">
    <input v-model="isDark" type="checkbox" class="theme-switch__input" />
    <span class="theme-switch__slider" />
  </label>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { ref, watch } from 'vue';
import { ThemesEnum } from '@/enums/themesEnum';

const { getTheme, setTheme } = useTheme(document, localStorage);

const isDark = ref(getTheme() === ThemesEnum.DARK);

watch(isDark, () => {
  if (isDark.value) {
    return setTheme(ThemesEnum.DARK);
  }

  setTheme(ThemesEnum.LIGHT);
});
</script>

<style scoped lang="scss">
.theme-switch {
  width: 70px;
  height: 42px;
  min-width: 70px;
  min-height: 42px;
  position: relative;
  display: inline-block;
  border-radius: 21px;
  background-color: $color--switch-bg;

  &__input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    inset: 0;

    &::before {
      content: url('/src/assets/icons/sun.svg');
      left: 4px;
      bottom: 4px;
      width: 35px;
      height: 35px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: $color--switch-circle;
      transition: 400ms;
      cursor: pointer;
    }
  }

  &__input:checked + &__slider::before {
    content: url('/src/assets/icons/moon.svg');
    transform: translateX(27px);
  }
}
</style>

<template>
  <svg class="base-icon" :class="iconClass" width="1em" height="1em" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  name: string;
  prefix?: string;
  reverse?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const iconClass = computed(() => {
  return [{ 'base-icon--reversed': props.reverse }, `base-icon--${props.name}`];
});
</script>

<style lang="scss" scoped>
.base-icon {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  transition: transform 0.2s;

  &--reversed {
    transform: rotate(180deg);
  }
}
</style>

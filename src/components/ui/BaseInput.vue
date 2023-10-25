<template>
  <div class="base-input" :class="{ 'base-input-error': props.validationStatus === 'error' }">
    <slot name="before" />

    <input
      v-bind="$attrs"
      :value="modelValue"
      :type="currentInputType"
      :placeholder="placeholder"
      class="base-input__input"
      v-on="$attrs"
      @input="emits('update:modelValue', $event.target?.value)"
    />

    <base-icon
      v-if="type === 'password'"
      :name="currentInputTypeEyeIconName"
      color="black"
      width="14"
      height="7.5"
      @click="handleEyeStatusChange"
    />
    <slot name="after" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';

type Props = {
  modelValue: string;
  type?: 'text' | 'password';
  placeholder?: string;
  validationStatus?: 'success' | 'error';
};

type Emits = {
  (e: 'update:modelValue', value: string): void;
};

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const emits = defineEmits<Emits>();

const currentInputType = ref<'password' | 'text'>(props.type);
const currentInputTypeEyeIconName = computed(() =>
  currentInputType.value === 'password' ? 'eye-closed' : 'eye-opened'
);

const handleEyeStatusChange = () => {
  currentInputType.value = currentInputType.value === 'password' ? 'text' : 'password';
};
</script>

<style scoped lang="scss">
.base-input {
  min-width: 150px;
  display: flex;
  border-radius: 8px;
  box-shadow: 5px 5px 20px 0 rgb(188 188 188 / 0.25);
  color: $base-color--active;
  background-color: $base-color--whit;
  padding: 20px;
  gap: 10px;

  &-error {
    border: 1px solid $base-color--red;
  }

  &__input {
    min-width: 0;
    flex-grow: 1;
    margin-right: 10px;
  }
}
</style>

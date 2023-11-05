<template>
  <div class="base-input" :class="{ 'base-input-error': formItemContext?.validationState === 'error' }">
    <slot name="before" />

    <input
      :id="formItemContext?.field"
      v-bind="$attrs"
      :value="modelValue"
      :type="currentInputType"
      class="base-input__input"
      v-on="$attrs"
      @input="emits('update:modelValue', $event.target?.value)"
      @blur="handleBlur"
    />

    <base-icon
      v-if="type === 'password'"
      :name="currentInputTypeEyeIconName"
      color="black"
      width="14"
      height="7.5"
      @click="handleEyeStatusChange"
    />
    <base-icon
      v-if="currentValidationState"
      :class="validationStateClass"
      :name="validationStateIconName"
      width="8"
      height="8"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import { useFormContext } from '@/composables/useFormContext';

type Props = {
  modelValue: string;
  type?: 'text' | 'password';
};

type Emits = {
  (e: 'update:modelValue', value: string): void;
};

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});

const emits = defineEmits<Emits>();

const { formItemContext } = useFormContext();

const currentValidationState = computed(() => {
  if (!formItemContext?.validationState && !formItemContext?.foreignError) return;

  return formItemContext?.validationState === 'error' || formItemContext?.foreignError ? 'error' : 'success';
});
const validationStateIconName = computed(() => {
  return currentValidationState.value === 'error' ? 'x' : 'daw';
});
const validationStateClass = computed(() => {
  return currentValidationState.value === 'error' ? 'icon-error' : 'icon-success';
});

const currentInputType = ref<'password' | 'text'>(props.type);
const currentInputTypeEyeIconName = computed(() =>
  currentInputType.value === 'password' ? 'eye-closed' : 'eye-opened'
);

const handleEyeStatusChange = () => {
  currentInputType.value = currentInputType.value === 'password' ? 'text' : 'password';
};

const handleBlur = () => {
  formItemContext?.validate('blur');
};

watch(
  () => props.modelValue,
  () => {
    formItemContext?.validate('change');
  }
);
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

  &__input {
    min-width: 0;
    flex-grow: 1;
    margin-right: 10px;
  }
}
</style>

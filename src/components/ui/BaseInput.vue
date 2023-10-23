<template>
  <div class="base-input" :class="{ 'base-input-error': isError }">
    <input
      v-model="inputText"
      :type="currentInputType"
      :placeholder="placeholder"
      class="base-input__input"
      @input="handleInputInput"
    />
    <base-icon
      v-if="type === 'password'"
      :name="eyeIconName"
      color="black"
      width="14"
      height="7.5"
      @click="handleEyeStatusChange"
    />
    <base-icon v-if="validators" :class="validationIconClass" :name="validationIconName" width="8" height="8" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import { ValidatorType } from '@/components/validatorTypes';

type Props = {
  type: 'text' | 'password';
  placeholder?: string;
  validators?: ValidatorType<string>[];
};

type Emits = {
  (e: 'validation', success: boolean, message?: string): void;
};

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});
const emits = defineEmits<Emits>();

const inputText = ref<string>('');
const isError = ref<boolean>(true);
const currentInputType = ref<'password' | 'text'>(props.type);

const eyeIconName = computed(() => (currentInputType.value === 'password' ? 'eye-closed' : 'eye-opened'));
const validationIconName = computed(() => (isError.value ? 'x' : 'daw'));
const validationIconClass = computed(() => (isError.value ? 'icon-error' : 'icon-success'));

const handleInputInput = () => {
  for (let validator of props.validators || []) {
    const [success, message] = validator(inputText.value);

    if (!success) {
      isError.value = true;

      return emits('validation', success, message);
    }
  }

  isError.value = false;

  emits('validation', true);
};

const handleEyeStatusChange = () => {
  if (currentInputType.value === 'password') currentInputType.value = 'text';
  else if (currentInputType.value === 'text') currentInputType.value = 'password';
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

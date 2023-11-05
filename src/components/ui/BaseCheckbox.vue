<template>
  <div class="base-checkbox">
    <input
      v-bind="$attrs"
      class="checkbox base-checkbox__box"
      type="checkbox"
      :value="modelValue"
      v-on="$attrs"
      @change="$emit('update:modelValue', $event.target?.checked)"
    />
    <div v-if="props.label" class="base-checkbox__label">
      {{ props.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: boolean;
  label?: string;
};

type Emits = {
  (e: 'update:modelValue', value: boolean): void;
};

const props = defineProps<Props>();

defineEmits<Emits>();
</script>

<style scoped lang="scss">
@supports (-webkit-appearance: none) or (-moz-appearance: none) or (appearance: none) {
  input.checkbox[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}

.checkbox {
  width: 31px;
  height: 31px;
  position: relative;
  display: block;
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

.base-checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: left;

  &__box {
    margin-right: 12px;
  }

  &__label {
    color: $color--checkbox;
  }
}
</style>

<template>
  <div class="base-form-item">
    <label class="base-form-item__label" :for="props.field">
      {{ props.label }}
    </label>
    <slot />
    <form-error v-if="props?.foreignError" class="base-form-item__error">
      {{ props.foreignError }}
    </form-error>
    <form-error v-else-if="errors.length" class="base-form-item__error">
      {{ errors[0].message }}
    </form-error>
  </div>
</template>

<script setup lang="ts">
import { useFormContext } from '@/composables/useFormContext';
import { computed, onBeforeMount, onBeforeUnmount, provide, reactive, ref, toRefs } from 'vue';
import { FormItemProps, FormItemRule, FormItemTrigger, ValidationState } from '@/components/ui/Form/types';
import AsyncValidator, { ValidateError } from 'async-validator';
import { formItemContextInjectionKey } from '@/constants/injectionKeys';
import FormError from '@/components/ui/Form/FormError.vue';

const props = defineProps<FormItemProps>();

const { formContext } = useFormContext();

const fieldValue = computed(() => {
  return (formContext?.modelValue as any)?.[props.field];
});

const fieldRules = computed<FormItemRule[]>(() => {
  return (formContext?.rules as any)?.[props.field];
});

const errors = ref<ValidateError[]>([]);

const validationState = ref<ValidationState>('');

const doValidate = (rules: FormItemRule[]) => {
  const fieldName = props.field;
  const validator = new AsyncValidator({
    [fieldName]: rules,
  });

  return validator.validate({
    [fieldName]: fieldValue.value,
  });
};

const validate = (trigger?: FormItemTrigger) => {
  const rules = fieldRules.value.filter((rule) => !rule?.trigger || rule.trigger === trigger);

  doValidate(rules)
    .then(() => {
      errors.value = [];

      validationState.value = 'success';
    })
    .catch(({ fields }) => {
      errors.value = fields[props.field];

      validationState.value = 'error';
    });

  return errors.value.length === 0;
};

const formItemContext = reactive({
  ...toRefs(props),
  validate,
  validationState,
  errors,
});

provide(formItemContextInjectionKey, formItemContext);

onBeforeMount(() => {
  formContext?.addField(formItemContext);
});

onBeforeUnmount(() => {
  formContext?.removeField(formItemContext);
});
</script>

<style scoped lang="scss">
.base-form-item {
  &__label {
    display: block;
    color: $base-color--non;
    margin-bottom: 12px;
  }

  &__error {
    margin: 12px 0;
  }
}
</style>

<template>
  <form class="base-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { FormItemContext, FormProps } from '@/components/ui/Form/types';
import { computed, provide, reactive, ref, toRefs } from 'vue';
import { formContextInjectionKey } from '@/constants/injectionKeys';

const props = defineProps<FormProps>();
const fields = ref<FormItemContext[]>([]);

const addField = (field: FormItemContext) => {
  fields.value.push(field);
};

const removeField = (field: FormItemContext) => {
  fields.value.splice(fields.value.indexOf(field), 1);
};

const allErrors = computed(() => {
  return fields.value.map((el) => el.errors).flat();
});

provide(
  formContextInjectionKey,
  reactive({
    ...toRefs(props),
    addField,
    removeField,
  })
);

defineExpose({
  allErrors,
});
</script>

<style scoped lang="scss">
.base-form {
  max-width: 400px;
}
</style>

<template>
  <base-form v-model="formData" class="auth-form" :rules="formRules">
    <base-form-item field="login" :label="t('auth.login')">
      <base-input v-model="formData.login" />
    </base-form-item>
    <base-form-item field="password" :label="t('auth.password')">
      <base-input v-model="formData.password" type="password" />
    </base-form-item>
    <base-checkbox v-model="formData.remember" :label="t('auth.rememberData')" />
    <div class="auth-form__footer">
      <a class="auth-form__forgot-password" href="">{{ t('auth.forgotPassword') }}</a>
      <base-button type="submit"> {{ t('auth.logIn') }} </base-button>
    </div>
  </base-form>
</template>

<script setup lang="ts">
import BaseForm from '@/components/ui/Form/BaseForm.vue';
import BaseFormItem from '@/components/ui/Form/BaseFormItem.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import { reactive } from 'vue';
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
import { FormRules } from '@/components/ui/Form/types';
import BaseButton from '@/components/ui/BaseButton.vue';
import { useI18n } from 'vue-i18n';

const formData = reactive({
  login: '',
  password: '',
  remember: false,
});

const { t } = useI18n();

const formRules: FormRules = {
  login: [
    {
      required: true,
      message: t('errors.requiredFieldIs', { field: t('auth.login') }),
    },
  ],
  password: [
    {
      required: true,
      message: t('errors.requiredFieldIs', { field: t('auth.password') }),
    },
  ],
};
</script>

<style scoped lang="scss">
.auth-form {
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
  }

  &__forgot-password {
    color: $base-color--non;
  }
}
</style>

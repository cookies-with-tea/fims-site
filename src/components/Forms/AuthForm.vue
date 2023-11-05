<template>
  <base-form v-model="formData" class="auth-form" :rules="formRules">
    <base-form-item field="login" label="Логин">
      <base-input v-model="formData.login" />
    </base-form-item>
    <base-form-item field="password" label="Пароль">
      <base-input v-model="formData.password" type="password" />
    </base-form-item>
    <base-checkbox v-model="formData.remember" label="Запомнить данные" />
    <div class="auth-form__footer">
      <a class="auth-form__forgot-password" href="">Забыли пароль?</a>
      <base-button type="submit"> Войти </base-button>
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

const formData = reactive({
  login: '',
  password: '',
  remember: false,
});

const formRules: FormRules = {
  login: [
    {
      required: true,
      message: 'Пароль это обязательное поле.',
    },
  ],
  password: [
    {
      required: true,
      message: 'Логин это обязательное поле.',
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

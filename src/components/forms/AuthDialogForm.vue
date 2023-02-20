<template>
  <div v-if="props.visible">
    Авторизация
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="authorizationUserData"
      style="max-width: 460px"
    >
      <el-form-item label="Почта">
        <el-input v-model="authorizationUserData.email" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="authorizationUserData.password" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="signIn">Войти</el-button> 
    <el-button type="primary" @click="selectorForm">Регистрация</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import usersApi from "@/api/users.api";
import {ElMessage} from "element-plus";

const labelPosition = ref("top");

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "select-form"): void;
}>();

const selectorForm = (): void => {
  emit("select-form");
};

const authorizationUserData = reactive({
  email: "",
  password: "",
});

const signIn = async(): Promise<void> => {
  const [error, data] = await usersApi.userAuthorization(authorizationUserData)

  if (!error && data) {
    ElMessage({
      type: 'success',
      message: 'Success'
    })
    localStorage.setItem('token', data.access);
  }
}
</script>
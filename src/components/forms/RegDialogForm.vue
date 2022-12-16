<template>
  <div v-if="props.visible">
    Регистрация
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="registerUserData"
      style="max-width: 460px"
    >
      <el-form-item label="Почта">
        <el-input v-model="registerUserData.email" />
      </el-form-item>
      <el-form-item label="Имя">
        <el-input v-model="registerUserData.username" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="registerUserData.password" />
      </el-form-item>           
    </el-form>
    <el-button type="primary" @click="signUp">Создать аккаунт</el-button> 
    <span>Или войти через</span>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { method } from 'lodash';
import { reactive, ref } from "vue";

const labelPosition = ref("top");
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const registerUserData = reactive({
  username: "",
  email: "",  
  password: "",
});

const signUp = async (): Promise<void> => {
  await axios({
    method: 'post',
    url: 'http://localhost:8000/auth/users/',
    headers: { 'Content-Type': 'application/json' },
    data: registerUserData,
    withCredentials: false,
  })
};

</script>
<!-- http://localhost:8000/auth/users/ -->
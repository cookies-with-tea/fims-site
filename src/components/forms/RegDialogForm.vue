<template>
  <div v-if="props.visible">
    Регистрация
    <el-form label-width="100px" :model="registerUserData" style="max-width: 460px">
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
import { reactive } from 'vue'
import usersApi from '@/api/users.api'
import { ElMessage } from 'element-plus'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
const registerUserData = reactive({
  email: '',
  username: '',
  password: '',
})

const signUp = async (): Promise<void> => {
  const [error, data] = await usersApi.userRegister(registerUserData)

  if (!error && data) {
    ElMessage({
      type: 'success',
      message: 'Success',
    })
  }
}
</script>
<!-- http://localhost:8000/auth/users/ -->

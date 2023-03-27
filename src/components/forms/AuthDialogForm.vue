<template>
  <div v-if="props.visible" class="auth-dialog__forms">
    <h2 class="auth-dialog__title">Вход</h2>
    <el-form label-width="100px" :model="authorizationUserData" style="max-width: 460px">
      <el-form-item label="Почта">
        <el-input v-model="authorizationUserData.email" placeholder="Введите почту" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="authorizationUserData.password" placeholder="Введите пароль" />
      </el-form-item>
    </el-form>
    <el-button type="primary" class="enter-button" @click="handleFormSubmit"> Войти </el-button>
    <div class="auth-dialog__bottom">
      <ul class="flex bottom-list">
        <li class="bottom-list__item">
          <span class="item-span">Забыли пароль?</span>
        </li>
        <li class="bottom-list__item">
          <div class="item-partition" />
        </li>
        <li class="bottom-list__item">
          <span class="item-span" @click="handleFormChange">Регистрация</span>
        </li>
      </ul>
      <span class="bottom-span">Или войти через</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import usersApi from '@/api/users.api'
import { ElMessage } from 'element-plus'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'select-form'): void
}>()

const handleFormChange = (): void => {
  emit('select-form')
}

const authorizationUserData = reactive({
  email: '',
  password: '',
})

const handleFormSubmit = async (): Promise<void> => {
  const [error, data] = await usersApi.userAuthorization(authorizationUserData)

  if (!error && data) {
    ElMessage({
      type: 'success',
      message: 'Success',
    })

    localStorage.setItem('token', data.access)
  }
}
</script>

<style lang="scss" scoped>
.auth-dialog {
  &__title {
    text-align: center;
    margin-bottom: 45px;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .bottom-span {
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: 0.05em;
      color: $color--white-secondary;
    }
  }
}

.bottom-list {
  display: flex;
  margin-bottom: 25px;

  &__item {
    display: flex;

    .item-span {
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      color: $color--white-default;
    }

    .item-partition {
      width: 2px;
      height: 18px;
      background: $color--dark-secondary;
    }
  }

  &__item:not(:last-child) {
    margin-right: 12px;
  }
}

.el-form-item {
  &__content {
    width: 400px;
  }
}

.enter-button {
  width: fit-content;
  height: fit-content;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.05em;
  padding: 10px 105px;
  margin: 30px 0 25px 150px;
}
</style>

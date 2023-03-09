<template>
  <div v-if="props.visible" class="auth-dialog-forms">
    <h2 class="auth-dialog__title">Вход</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="authorizationUserData"
      style="max-width: 460px"
    >
      <el-form-item label="Почта">
        <el-input
          v-model="authorizationUserData.email"
          placeholder="Введите почту"
        />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input
          v-model="authorizationUserData.password"
          placeholder="Введите пароль"
        />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="signIn" class="enter-button">
      Войти
    </el-button>
    <div class="auth-dialog__bottom">
      <span class="bottom-span">Забыли пароль?</span>
      <div class="bottom-partition" />
      <span class="bottom-span" @click="selectorForm">Регистрация</span>
    </div>
    <!-- <el-button type="primary" @click="selectorForm">Регистрация</el-button> -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import usersApi from "@/api/users.api";
import { ElMessage } from "element-plus";

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

const signIn = async (): Promise<void> => {
  const [error, data] = await usersApi.userAuthorization(authorizationUserData);

  if (!error && data) {
    ElMessage({
      type: "success",
      message: "Success",
    });
    localStorage.setItem("token", data.access);
  }
};
</script>

<style lang="scss" scoped>
.auth-dialog {
  &__title {
    text-align: center;
  }

  &__bottom {
    margin-left: 161px;
    display: flex;

    .bottom-span {
      margin-right: 12px;
    }
    .bottom-partition {
      width: 2px;
      height: 18px;
      margin-right: 12px;
      background: #666666;
    }
  }
}

.el-form-item {
  &__content {
    width: 400px;
  }
}

.el-button--primary {
  width: 260px;
  height: 42px;
  margin: 30px 0 25px 168px;
  background: #2d8984;
  border-radius: 16px;

}
</style>
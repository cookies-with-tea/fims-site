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
      <ul class="flex bottom-list">
        <li class="bottom-list__item">
          <span class="item-span">Забыли пароль?</span>
        </li>
        <li class="bottom-list__item">
          <div class="item-partition" />
        </li>
        <li class="bottom-list__item">
          <span class="item-span" @click="selectorForm">Регистрация</span>
        </li>
      </ul>
      <span class="bottom-span">Или войти через</span>
    </div>
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
    // margin-left: 155px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .bottom-span {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: 0.05em;
      color: $span--color-white;
    }
  }
}

.bottom-list {
  margin-bottom: 25px;

  &__item {
    .item-span {
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      color: $span--color-dark;
    }
    .item-partition {
      width: 2px;
      height: 18px;
      background: $span--color-dark;
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

.el-button--primary {
  width: 260px;
  height: 42px;
  margin: 30px 0 25px 150px;
  border: none;
  border-radius: 16px;
}
</style>
<template>
  <el-dialog
    v-model="props.visible"
    width="600px"
    :show-close="false"
    :before-close="closeDialog"
  >
    <template #header="{ close }">
      <div class="my-header">
        <el-button class="close-button" @click="close">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L25 25M1 25L25 1" stroke="#777777" />
          </svg>
        </el-button>
      </div>
    </template>

    <auth-dialog-form
      :visible="isLoginFormVisible"
      @select-form="formVisibleChange"
    />
    <reg-dialog-form
      :visible="!isLoginFormVisible"
      @select-form="formVisibleChange"
    />

    <template #footer>
      <ul class="dialog-list">
        <li
          v-for="item in dialogSocialNetworks"
          :key="item.id"
          class="dialog-list__item"
        >
          <img :src="item.url" :alt="item.alt" />
        </li>
      </ul>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { dialogSocialNetworks } from "@/constants/mainHero";
import { ElButton, ElDialog } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";

const emit = defineEmits<{
  (e: "close-dialog"): void;
}>();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const isLoginFormVisible = ref(true);

const closeDialog = (): void => {
  emit("close-dialog");
  isLoginFormVisible.value = true;
};

const formVisibleChange = (): void => {
  isLoginFormVisible.value = !isLoginFormVisible.value;
};
</script>
<style lang="scss" scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.close-button  {
  position: absolute;
  top: 25px;
  left: 530px;
  background-color:transparent;
  border: none;
}
.dialog-list {
  width: 220px;
  display: flex;
  justify-content: space-between;
}
</style>
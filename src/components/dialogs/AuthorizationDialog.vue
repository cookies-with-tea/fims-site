<template>
  <el-dialog :model-value="props.visible" width="600px" :show-close="false" :before-close="closeDialog">
    <template #header>
      <div class="header-inner w-100 d-f jc-fe">
        <button class="close-button" @click="closeDialog">
          <icon-template name="closing-cross" :width="24" :height="24" />
        </button>
      </div>
    </template>

    <auth-dialog-form :visible="isLoginFormVisible" @select-form="formVisibleChange" />
    <reg-dialog-form :visible="!isLoginFormVisible" @select-form="formVisibleChange" />

    <template #footer>
      <ul class="dialog-list">
        <li v-for="item in dialogSocialNetworks" :key="item.id" class="dialog-list__item">
          <img :src="item.icon" :alt="item.alt" />
        </li>
      </ul>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { dialogSocialNetworks } from '@/constants/mainHero'

const emit = defineEmits<{
  (e: 'close-dialog'): void
}>()

type Props = {
  visible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
})

const isLoginFormVisible = ref(true)

const closeDialog = (): void => {
  emit('close-dialog')

  isLoginFormVisible.value = true
}

const formVisibleChange = (): void => {
  isLoginFormVisible.value = !isLoginFormVisible.value
}
</script>

<style lang="scss" scoped>
.dialog-list {
  width: 220px;
  display: flex;
  justify-content: space-between;
}

.close-button {
  color: inherit;
  cursor: pointer;
}
</style>

<template>
  <el-dialog :model-value="props.visible" width="600px" :before-close="closeDialog">
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

type Props = {
  visible: boolean
}

const emit = defineEmits<{
  (e: 'close-dialog'): void
}>()

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
.dialog-footer {
  button:first-child {
    margin-right: 10px;
  }
}
</style>

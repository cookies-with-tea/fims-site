<template> 
    <el-dialog
      v-model="props.visible"
      title="Tips"
      width="30%"
      :before-close="closeDialog"
    >    
    
      <auth-dialog-form :visible="isLoginFormVisible" @select-form="formVisibleChange"/>
      <reg-dialog-form :visible="!isLoginFormVisible"  @select-form="formVisibleChange"/>      

      <template #footer>        
        <span class="dialog-footer">
            close
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
        </el-button> -->
        </span>
      </template>
    </el-dialog>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const emit = defineEmits<{
  (e: 'close-dialog'): void
}>()

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    }
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
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
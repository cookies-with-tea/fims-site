<template> 
    <el-dialog
      v-model="props.visible"
      title="Tips"
      width="30%"
      :before-close="closeDialog"
    >    
    
      <auth-dialog-form :visible="isLoginFormVisible" @selectp-form="formVisibleChange"/>
      <reg-dialog-form :visible="!isLoginFormVisible"  @selectp-form="formVisibleChange"/>      

      <template #footer>
        <el-button type="primary" @click="selectorForm">Регистрация</el-button>
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
  (e: 'select-form'): void
}>()

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    }
})

const isLoginFormVisible = ref(false)

const selectorForm = (): void => {
    emit('select-form')
}

const closeDialog = (): void => {
    emit('close-dialog')
}

const formVisibleChange = (): void => {
  isLoginFormVisible.value = !isLoginFormVisible.value
  console.log(props.visible)
}

// const dialogVisible = ref(false)

// const handleClose = (done: () => void) => {
//   ElMessageBox.confirm('Are you sure to close this dialog?')
//     .then(() => {
//       done()
//     })
//     .catch(() => {
//       // catch error
//     })
// }
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
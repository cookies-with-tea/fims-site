<template> 
    <el-dialog
      v-model="props.visible"
      title="Tips"
      width="30%"
      :before-close="closeDialog"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
            123
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

const closeDialog = (): void => {
    emit('close-dialog')
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
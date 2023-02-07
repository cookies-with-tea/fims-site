<template>
    <el-button type="info" @click="getMovie">Info</el-button>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import usersApi from "@/api/users.api";
import {ElMessage} from "element-plus";


const getMovieData = reactive({
  
});

const getMovie = async(): Promise<void> => {
  const [error, data] = await usersApi.getMovie(getMovieData)
  if (!error && data) {
    ElMessage({
      type: 'success',
      message: 'Success'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
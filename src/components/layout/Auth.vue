<template>
  <div>
    <el-button class="close" @click="visible = !visible" icon="fa fa-close"></el-button>
    <img :src="avatar" alt class="avatar" />
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="form">
      <!-- 表单内容 -->
      <el-form-item prop="id">
        <el-input v-model.number="loginForm.id" prefix-icon="fa fa-id-card" placeholder="输入你的学号" />
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          prefix-icon="fa fa-key fa-fw"
          autocomplete="off"
          placeholder="输入你的密码"
        />
      </el-form-item>
      <el-form-item class="rememberme">
        <el-checkbox v-model="loginForm.rememberme">记住我</el-checkbox>
      </el-form-item>

      <!-- 底部栏 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button type="plain" native-type="reset">重置</el-button>
        <el-button type="text" @click=" forgetPass ">忘记密码</el-button>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      slot="reference"
      icon="fa fa-user-o fa-fw"
      @click="visible = !visible"
      round
    >登录</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
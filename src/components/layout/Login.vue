<template>
  <el-container>
    <el-header class="dark">
      <el-row>
        <el-col>
          <h1>博客系统</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="bg">
      <el-row>
        <el-col
          :xs="{span: 24, offset: 0}"
          :sm="{span: 18, offset: 2}"
          :md="{span: 8, offset: 12}"
          :lg="{span: 4, offset: 12}"
        >
          <el-card>
            <div slot="header" class="clearfix">
              <span>登录</span>
            </div>
            <el-form :model="form" :status-icon="true" :rules="rules" ref="form" class="form">
              <!-- 表单内容 -->
              <el-form-item prop="username">
                <el-input
                  v-model="form.username"
                  prefix-icon="el-icon-user-solid"
                  placeholder="输入用户名"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="form.password"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                  placeholder="输入密码"
                />
              </el-form-item>
              <el-form-item class="rememberme">
                <el-checkbox v-model="form.rememberme">记住我</el-checkbox>
              </el-form-item>

              <!-- 底部栏 -->
              <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
                <el-button type="plain" native-type="reset">重置</el-button>
                <!-- <el-button type="text" @click=" forgetPass ">忘记密码</el-button> -->
              </el-form-item>
            </el-form>
            <el-button
              type="primary"
              slot="reference"
              icon="fa fa-user-o fa-fw"
              @click="visible = !visible"
              round
              v-loading="loading"
            >登录</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import service from '@/services/models/author'
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        rememberme: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' },
        ]
      },
      loading: false
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      let resp = await service.login({ data: this.form })
      let res = resp.data
      if (res.code == 200) {
        this.loading = false
        this.setAuthorAndStatus(this.form, true)
        this.$router.push({ name: "home" })
        this.$message.success(res.result)
      } else {
        this.loading = false
        this.$message.error(res.result)
      }
    },
    async setAuthorAndStatus(auth, status) {
      this.$store.commit('setAuth', auth)
      this.$store.commit('setStatus', status)
    },
  }
}
</script>

<style scoped>
.dark {
  padding: 12px 32px;
  background: #ebeef5;
  color: #303133;
  box-shadow: 0px 0px 5px black;
}
.bg {
  height: 100%;
  background: url(../../../static/bg.jpg);
}
</style>
<template>
  <div class="home fill-height">
    <el-container class="fill-height">
      <el-aside class="fill-height aside">
        <el-header class="header">博客系统</el-header>
        <NavMenu class="fill-height" />
      </el-aside>
      <el-main class="main">
        <el-header class="header">
          <BreadCrumb />
        </el-header>
        <!-- 拆分，手动写tabs -->
        <Tabs />
        <app-main />
        <el-footer>
          <Footer />
        </el-footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { NavMenu, Tabs, AppMain, BreadCrumb, Footer } from "@/components/layout"

export default {
  name: 'home',
  components: {
    // HelloWorld,
    NavMenu,
    Tabs,
    AppMain,
    BreadCrumb,
    Footer,
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background: #303133;
  color: #c0c4cc;
}
.main {
  padding: 0px;
}
.aside {
  width: 200px !important;
  overflow-y: hidden;
}
</style>

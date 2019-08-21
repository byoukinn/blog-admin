<template>
  <div class="home fill-height">
    <el-container class="fill-height">
      <el-aside width="200px" class="fill-height">
        <NavMenu class="fill-height" />
      </el-aside>
      <el-main class="main">
        <el-header class="header">Header</el-header>
        <TabsView />
        <BreadCrumb />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavMenu from "@/components/layout/NavMenu.vue"
import TabsView from "@/components/layout/Tabs.vue"
import BreadCrumb from "@/components/layout/BreadCrumb.vue"

export default {
  name: 'home',
  components: {
    HelloWorld,
    NavMenu,
    TabsView,
    BreadCrumb,
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
</style>

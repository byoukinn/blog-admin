<template>
  <div>
    <el-submenu v-if="data.children" :index="data.path">
      <template slot="title">
        <i :class="data.icon"></i>
        <span>{{data.meta.title}}</span>
      </template>
      <!-- 递归自己 -->
      <NavMenuItem v-for="d in data.children" :key="d.id" :data="d" />
    </el-submenu>

    <!-- child -->
    <el-menu-item v-else-if="data.hidden != true" :index="data.path">
      <i :class="data.icon"></i>
      <span slot="title">{{data.meta.title}}</span>
    </el-menu-item>
  </div>
</template>

<script>
import NavMenuItem from '@/components/layout/NavMenuItem.vue'
export default {
  name: 'NavMenuItem',
  props: ['data'],
  components: {
    NavMenuItem,
  }
}
</script>


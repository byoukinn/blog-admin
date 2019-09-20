<template>
  <el-row class="fill-height">
    <el-col :span="24" class="fill-height">
      <el-menu
        default-active="2"
        class="nav-vertical fill-height"
        background-color="#606266"
        text-color="#fff"
        :router="true"
        active-text-color="#E6A2 3C"
      >
        <NavMenuItem v-for="item in stageList" :key="item.id" :data="item" />
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import NavMenuItem from '@/components/layout/NavMenuItem.vue'
import mapGetters from 'vuex'
export default {
  methods: {
    ...mapGetters(['stageList']),
  },
  components: {
    NavMenuItem,
  }
}
</script>

<style scoped>
.a {
  color: rgb(66, 66, 66);
}
.nav-vertical {
  border: 0;
}
</style>


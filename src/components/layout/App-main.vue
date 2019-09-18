<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <el-card>
        <router-view></router-view>
      </el-card>
    </transition>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.app-main {
  padding: 24px 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition-timing-function: linear;
  transition: 0.4s;
  opacity: 1;
  transform: translate(0px, 0px);
}
.fade-enter,
.fade-leave-active {
  transition: 0.4s;
  opacity: 0;
  transform: translate(25px, 0px);
}
.fade-enter {
  transform: translate(-25px, 0px);
}
</style>

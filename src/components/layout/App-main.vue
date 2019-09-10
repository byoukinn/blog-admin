<template>
  <section>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

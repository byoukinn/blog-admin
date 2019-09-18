<template>
  <div>
    <ul class="tabs">
      <transition-group name="tag">
        <li
          v-for="(h, i) in histories"
          :key="h.name"
          @click="linkTo(h)"
          :class="{'actived': actived == h.name}"
        >
          <div>
            {{h.meta.title}}
            <span class="el-icon-close close" @click.stop="close(h, i)"></span>
          </div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      histories: [],
    }
  },
  created() {
    this.histories.push(this.$route)
  },
  watch: {
    $route(to) {
      // 如果 histories 里没有跳转的路由，则加入堆栈
      let included = this.histories.map(item => to.name == item.name).includes(true)
      if (!included) this.histories.push(to)
    }
  },
  computed: {
    actived() {
      return this.$route.name
    }
  },
  methods: {
    linkTo(to) {
      this.$router.push(to)
    },
    close(tab, index) {
      this.histories = this.histories.filter(item => item.name != tab.name)
      // 如果被删除的是当前标签
      if (this.actived == tab.name) {
        let len = this.histories.length
        let i = index
        let next = i == len ? i - 1 : i
        this.linkTo(this.histories[next])
      }
    },
  },
}
</script>

<style scoped>
.tabs {
  background: #303133;
  display: flex;
  z-index: 999;
  padding-left: 18px;
}
.tabs li + li {
  border-left: #30313326 solid 1px;
}
.tabs li {
  transition-duration: 200ms;
  display: inline-block;
  padding: 8px 12px;
  background: #aaa;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.tabs li:hover {
  cursor: pointer;
  background: #dfdfdf;
}
.close {
  opacity: 0.4;
  border-radius: 500px;
}
.tabs li:hover .close:hover {
  opacity: 1;

  background: #bbbbbb;
}
.tabs li.actived {
  background: #eee;
  color: #666;
  transform: scale(1.05);
  transform-origin: center bottom;
}

.tag-enter-active,
.tag-leave-active {
  transition-timing-function: linear;
  transition: 0.4s;
  opacity: 1;
  transform: translate(0px, 0px);
}
.tag-enter,
.tag-leave-active {
  transition: 0.4s;
  opacity: 0;
}
.tag-enter {
  transform: translate(0px, -3px);
}
</style>
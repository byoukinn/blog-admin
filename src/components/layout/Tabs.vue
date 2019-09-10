<template>
  <div>
    <ul>
      <li v-for="(h, index) in histories" @click="jump(h)" :key="h.id">
        <span class="close" @click="close(index)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      histories: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }],
      tabIndex: 2
    }
  },
  watch: {
    $route(to) {
      console.log(to)
    }
  },

  methods: {
    jump(to) {
      console.log('jump', to)
    }
  },
}
</script>

<style>
</style>
<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      :key="item.name"
      v-for="(item, index) in editableTabs"
      :label="item.title"
      :name="item.name"
    >{{item.content}}</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {

}
</script>

<style>
</style>
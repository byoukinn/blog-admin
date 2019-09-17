<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="cover" label="封面" width="222">
        <template slot-scope="scope">
          <img width="200" :src="scope.row.cover" :alt="scope.row.title" />
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="update_time" label="最后更新时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Article from '../../services/models/article'
export default {

  data() {
    return {
      tableData: [],
      loading: false,
    }
  },
  created() {
    this.setData()
  },
  methods: {
    async setData() {
      this.loading = true
      let res = await Article.getArticles()
      this.loading = false
      this.tableData = res.data.data
      // if (res.code == 200) {
      //   this.tableData = res.data
      // } else {
      //   this.$message.error(res.result)
      // }
    }
  }
}
</script>

<style>
</style>
 
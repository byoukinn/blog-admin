<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文章名称">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="文章分类">
      <el-select v-model="form.catagory_id" placeholder="请选择文章分类">
        <el-option v-for="cata in catagorys" :key="cata.id" :label="cata.cname" :value="cata.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.create_time"
          style="width: 100%;"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="文章描述">
      <el-input v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>  
<script>
import Article from '../../services/models/article'
export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        desc: '',
        cover: '',
        catagory_id: '',
        permission: '',
        status: '',
        create_time: '',
      },
      catagorys: [],
      loading: false,
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      let { data } = await Article.createArticle(this.form)
      this.loading = false

      if (data.code == 200) {
        this.$message.success(data.msg)
      } else {
        this.$message.error(data.msg)

      }
    }
  }
}
</script>
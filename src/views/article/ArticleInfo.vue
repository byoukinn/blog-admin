<template>
	<el-row>
		<el-col :lg="mode == 'MESSAGE_BOX' ? 24 : 12">
			<el-form ref="form" :model="form" label-width="80px" status-icon>
				<el-form-item label="文章名称" prop="title">
					<el-input v-model="form.title" placeholder="请输入文章的名称"></el-input>
				</el-form-item>
				<el-form-item label="文章作者" prop="author_id">
					<el-select v-model="form.author_id" placeholder="请选择文章作者">
						<el-option
							v-for="author in authors"
							:key="author.id"
							:label="author.username"
							:value="author.id"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="文章分类" prop="category_id">
					<el-select v-model="form.category_id" placeholder="请选择文章分类">
						<el-option v-for="cate in categorys" :key="cate.id" :label="cate.cname" :value="cate.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="文章封面" prop="cover">
					<el-input v-model="form.cover" placeholder="请输入文章封面的地址（非必填）"></el-input>
				</el-form-item>

				<el-form-item label="公开状态" prop="status">
					<el-radio-group v-model="form.status">
						<el-radio label="1">公开</el-radio>
						<el-radio label="0">非公开</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="文章描述" prop="desc">
					<el-input
						type="textarea"
						v-model="form.desc"
						maxlength="150"
						:autosize="{ minRows: 2, maxRows: 5 }"
						show-word-limit
						placeholder="在此说明该文章的摘要"
					></el-input>
				</el-form-item>
				<el-form-item label="文章内容" prop="content">
					<el-input
						type="textarea"
						v-model="form.content"
						:autosize="{ minRows: 3, maxRows: 8 }"
						show-word-limit
						placeholder="在此输入该文章的内容"
					></el-input>
				</el-form-item>
				<el-form-item v-if="mode != 'MESSAGE_BOX'">
					<el-button type="primary" @click="submit" v-loading="loading">立即创建</el-button>
					<el-button @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>  
<script>
import Article from '@/services/models/article'
import Category from '@/services/models/category'
import Author from '@/services/models/author'
export default {
	props: ['params', 'mode'],
	data() {
		return {
			form: {
				title: '',
				content: '',
				desc: '',
				cover: '',
				category_id: '',
				author_id: '',
				permission: '',
				status: '',
				create_time: '',
			},
			categorys: [],
			authors: [],
			loading: false,
		}
	},
	created() {
		this.getCategorys()
		this.getAuthors()
		if (this.params) {
			this.form = this.params
		}
	},
	methods: {
		async getCategorys() {
			let { data } = await Category.getCategorys()
			this.categorys = data.code == 200 ? data.data : []
		},
		async getAuthors() {
			let { data } = await Author.getAuthors()
			this.authors = data.code == 200 ? data.data : []
		},
		async submit() {
			this.loading = true
			let { data } = await Article.createArticle({ data: this.form })
			this.loading = false
			if (data.code == 200) {
				this.$message.success(data.msg)
				this.$refs['form'].resetFields()
			} else {
				this.$message.error(data.msg)
			}
		},
		// 在 MESSAGE_BOX 模式时被调用
		async update(id) {
			let { data } = await Article.updateArticle(id, { data: this.form })
			return data
		},
		resetForm() {
			this.$refs['form'].resetFields()
		},
	},
}
</script>
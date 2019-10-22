<template>
	<div>
		<el-card>
			<el-form :model="filterForm" label-width="80px">
				<el-form-item prop="status" label="公开状态">
					<el-radio-group v-model="filterForm.status">
						<el-radio :label="-1">全部</el-radio>
						<el-radio :label="0">非公开</el-radio>
						<el-radio :label="1">公开</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="category_id" label="分类">
					<el-radio-group v-model="filterForm.category_id">
						<el-radio :label="-1">全部</el-radio>
						<el-radio v-for="cate in categorys" :key="cate.id" :label="cate.id">{{cate.cname}}</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card>
			<article-table :data="tableData" :loading="tableLoading" />
		</el-card>
	</div>
</template>

<script>
import Article from '../../services/models/article'
import Category from '../../services/models/category'
import ArticleTable from './ArticleTable'
export default {
	data() {
		return {
			tableData: [],
			tableLoading: false,
			loading: false,
			visible: false,
			tags: [],
			categorys: [],
			page: 1,
			rowSize: 10,
			index: 1, // 用于 messageBox 唯一化
			filterForm: {
				category_id: -1,
				status_id: -1,
			},
		}
	},
	created() {
		this.getTags()
		this.getCategorys()
		this.setTableData()
	},
	components: {
		ArticleTable,
	},
	watch: {
		filterForm: {
			handler() {
				this.setTableData()
			},
			deep: true,
		},
	},
	methods: {
		// popover close
		popClose(id) {
			this.$refs[`popover-${id}`].doClose()
		},
		async setTableData() {
			this.tableLoading = true
			this.loading = true
			let res = await Article.getArticlesWithParams({ data: this.filterForm })
			this.loading = false
			this.tableLoading = false
			this.tableData = res.data.data
		},
		async getTags() {},
		async getAuthors() {},
		async getCategorys() {
			let res = await Category.getCategorys()
			if (res.data.code == 200) {
				this.categorys = res.data.data
			} else {
				this.$message.error('网络环境欠佳，' + res.data.msg)
			}
		},
	},
}
</script>

<style scoped>
.el-card {
	margin: 16px;
}
.el-radio {
	padding: 8px;
}
</style>


<template>
	<div>
		<el-table :data="tableData" style="width: 100%" v-loading="loading">
			<el-table-column prop="update_time" fixed="left" label="最后更新时间" width="180"></el-table-column>
			<el-table-column prop="cover" label="封面" width="222">
				<template slot-scope="scope">
					<img width="200" :src="scope.row.cover" :alt="scope.row.title" />
				</template>
			</el-table-column>
			<el-table-column prop="author.username" label="作者" width="180"></el-table-column>
			<el-table-column prop="category.cname" label="分类" width="180"></el-table-column>
			<el-table-column prop="title" label="标题" width="200"></el-table-column>
			<el-table-column prop="status" label="状态" width="60"></el-table-column>
			<el-table-column prop="desc" label="描述" width="300"></el-table-column>
			<el-table-column fixed="right" label="操作" width="180">
				<template slot-scope="scope">
					<el-popover
						placement="left-start"
						width="180"
						trigger="click"
						:ref="`popover-${scope.row.id}`"
					>
						<p>删除将无法撤回，确定删除？</p>
						<div style="text-align: right; margin-top: 16px">
							<el-button size="mini" type="primary" @click="popClose(scope.row.id)">取消</el-button>
							<el-button type="text" size="small" @click="popClose(scope.row.id); deleteRow(scope.row)">确定</el-button>
						</div>
						<el-button
							type="danger"
							size="small"
							class="inner-button"
							v-popover:popover
							slot="reference"
						>删除</el-button>
					</el-popover>
					<el-button type="plain" size="small" @click="editRow(scope.row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import Article from '../../services/models/article'
import ArticleInfo from './ArticleInfo'
import InfoEditor from '@/lib/infoEditor'
export default {
	data() {
		return {
			tableData: [],
			loading: false,
			visible: false,
			page: 1,
			rowSize: 10,
			index: 1, // 用于 messageBox 唯一化
			filter: '',
		}
	},
	created() {
		this.setData()
	},
	components: {
		ArticleInfo,
	},
	methods: {
		// popover close
		popClose(id) {
			this.$refs[`popover-${id}`].doClose()
		},
		async setData() {
			this.loading = true
			let res = await Article.getArticles(this.page, this.rowSize)
			this.loading = false
			this.tableData = res.data.data
		},
		async deleteRow(data) {
			console.log('点击了', data)
		},
		async editRow(data) {
			data.author && delete data.author
			data.category && delete data.category
			InfoEditor(this, {
				data: data,
				title: '编辑文章',
				component: ArticleInfo,
				onsuccess: () => this.setData(),
			})
		},
	},
}
</script>

<style scoped>
.inner-button {
	margin-right: 8px;
}
</style>


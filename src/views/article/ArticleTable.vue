<template>
	<el-table :data="data" style="width: 100%" v-loading="loading">
		<el-table-column prop="update_time" fixed="left" label="最后更新时间" width="180" sortable></el-table-column>
		<el-table-column prop="cover" label="封面">
			<template slot-scope="scope">
				<el-popover
					trigger="hover"
					:ref="`img-popover-${scope.row.id}`"
					placement="right-start"
					width="300"
				>
					<img width="100%" :src="scope.row.cover" :alt="scope.row.title" />
					<el-tag type="success" slot="reference">图片</el-tag>
				</el-popover>
			</template>
		</el-table-column>
		<el-table-column prop="author.username" label="作者" width="120" sortable></el-table-column>
		<el-table-column prop="category.cname" label="分类" width="120" sortable></el-table-column>
		<el-table-column prop="title" label="标题" width="200"></el-table-column>
		<el-table-column prop="status" :formatter="statusFormatter" label="状态" width="90"></el-table-column>
		<el-table-column prop="desc" label="描述"></el-table-column>
		<el-table-column fixed="right" label="操作" width="180">
			<template slot-scope="scope">
				<el-popover placement="left-start" width="180" trigger="click" :ref="`popover-${scope.row.id}`">
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
</template>

<script>
import ArticleInfo from './ArticleInfo'
import InfoEditor from '@/lib/infoEditor'

export default {
	props: ['data', 'loading'],
	components: {
		// eslint-disable-next-line
		ArticleInfo,
	},
	methods: {
		statusFormatter(row) {
			return row.status ? '公开' : '非公开'
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
				onsuccess: () => this.setTableData(),
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
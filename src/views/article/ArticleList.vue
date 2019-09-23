<template>
	<div>
		<el-table :data="tableData" border style="width: 100%" v-loading="loading">
			<el-table-column prop="cover" label="封面" width="222">
				<template slot-scope="scope">
					<img width="200" :src="scope.row.cover" :alt="scope.row.title" />
				</template>
			</el-table-column>
			<el-table-column prop="author" label="作者" width="180"></el-table-column>
			<el-table-column prop="title" label="标题" width="200"></el-table-column>
			<el-table-column prop="status" label="状态" width="60"></el-table-column>
			<el-table-column prop="update_time" label="最后更新时间" width="180"></el-table-column>
			<el-table-column prop="desc" label="描述" width="300"></el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button  type="text" size="small">查看</el-button>
					<el-button type="text" size="small" @click="editRow(scope.row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import Article from '../../services/models/article'
import ArticleInfo from './ArticleInfo'
export default {
	data() {
		return {
			tableData: [],
			loading: false,
			page: 1,
			rowSize: 10,
			index: 1,	// 用于 messageBox 唯一化
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
		async setData() {
			this.loading = true
			let res = await Article.getArticles(this.page, this.rowSize)
			this.loading = false
			this.tableData = res.data.data
			// if (res.code == 200) {
			//   this.tableData = res.data
			// } else {
			//   this.$message.error(res.result)
			// }
		},
		async editRow(data) {
			const h = this.$createElement;
			console.log(data)
			let props = {params: data}
			props.action = 'edit'
			props.mode = 'messageBox'
			this.$msgbox({
			title: '编辑文章',
			message: h('ArticleInfo', { props: props, key: this.index++ }),
			showCancelButton: true,
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			beforeClose: (action, instance, done) => {
				if (action === 'confirm') {
				instance.confirmButtonLoading = true;
				instance.confirmButtonText = '执行中...';
					setTimeout(() => {
						done();
						setTimeout(() => {
							instance.confirmButtonLoading = false;
						}, 300);
					}, 3000);
				} else {
					done();
				}
			}
			}).then(action => {
				this.$message({
					type: 'info',
					message: 'action: ' + action
				});
			});
		}
	},
}
</script>


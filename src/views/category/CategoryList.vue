<template>
	<div>
		<el-table :data="tableData" style="width: 100%" v-loading="loading" :fit="true">
			<el-table-column prop="created_time" label="创建时间" width="220"></el-table-column>

			<el-table-column prop="cname" label="分类名" width="120"></el-table-column>
			<el-table-column prop="description" label="描述" width="200"></el-table-column>
			<el-table-column prop="cover" label="封面" width="360"></el-table-column>

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
import Category from '@/services/models/category'
import CategoryInfo from './CategoryInfo'
import InfoEditor from '@/lib/infoEditor'

export default {
	data() {
		return {
			tableData: [],
			loading: false,
			page: 1,
			rowSize: 10,
			index: 1, // 用于 messageBox 唯一化
			filter: '',
		}
	},
	components: {
		CategoryInfo,
	},
	mounted() {
		this.setData()
	},
	methods: {
		// popover close
		popClose(id) {
			this.$refs[`popover-${id}`].doClose()
		},
		async setData() {
			this.loading = true
			let res = await Category.getCategorys(this.page, this.rowSize)
			this.loading = false
			this.tableData = res.data.data
		},
		async deleteRow(data) {
			this.loading = true
			let res = await Category.deleteCategory(data.id)
			this.$message({ message: res.data.msg, type: res.data.code == 200 ? 'success' : 'error' })
			this.setData()
			this.loading = false
		},
		async editRow(data) {
			InfoEditor(this, {
				data: data,
				title: '编辑分类',
				component: CategoryInfo,
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

 
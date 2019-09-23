<template>
	<el-row>
		<el-col :md="mode == 'messageBox' ? 24 : 12">
			<el-form ref="form" :model="form" label-width="80px">
								<el-form-item label="文章封面">
					<el-input v-model="form.cover"></el-input>
				</el-form-item>

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
						<el-date-picker type="date" placeholder="选择日期" v-model="form.create_time" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="文章描述">
					<el-input v-model="form.desc"></el-input>
				</el-form-item>
				<el-form-item label="文章内容">
					<el-input type="textarea" v-model="form.content"></el-input>
				</el-form-item>
				<el-form-item v-if="mode != 'messageBox'">
					<el-button type="primary" @click="onSubmit" v-loading='loading'>立即创建</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
	
</template>  
<script>
import Article from '../../services/models/article'
export default {
	props: ['params', 'mode', 'action'],
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
	created() {
		if (this.params) this.form = this.params 
	},
	methods: {
		async onSubmit() {
			this.loading = true
			let { data } = await Article.createArticle({data: this.form})
			this.loading = false

			if (data.code == 200) {
				this.$message.success(data.msg)
				this.$refs['form'].resetFields()
			} else {
				this.$message.error(data.msg)
			}
		},
	},
}
</script>
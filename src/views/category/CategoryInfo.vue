<template>
	<el-row>
		<el-col :lg="mode == 'MESSAGE_BOX' ? 24 : 12">
			<el-form ref="form" :rules="rules" :model="form" label-width="80px" status-icon>
				<el-form-item label="分类名称" prop="cname">
					<el-input v-model="form.cname" placeholder="请输入分类的名称"></el-input>
				</el-form-item>
				<el-form-item label="分类封面" prop="cover">
					<el-input v-model="form.cover" placeholder="请输入分类封面的网址（非必填）"></el-input>
				</el-form-item>
				<el-form-item label="分类描述" prop="description">
					<el-input
						v-model="form.description"
						type="textarea"
						maxlength="150"
						:autosize="{ minRows: 3, maxRows: 6 }"
						show-word-limit
						placeholder="在此描述该文章分类的主要应用对象"
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
import Category from '@/services/models/category'
export default {
	props: ['params', 'mode'],
	data() {
		// validation
		let checkCname = async (rule, value, callback) => {
			if (!value) {
				return callback(new Error('分类名称不能为空'))
			}
			let { data } = await Category.checkName({ data: this.form })
			if (data.code != 200) {
				return callback(new Error(data.msg))
			} else {
				return callback()
			}
		}

		return {
			form: {
				cname: '',
				description: '',
				cover: '',
			},
			rules: {
				cname: [{ require: true, message: '请输入描述', trigger: 'blur' }, { validator: checkCname, trigger: 'blur' }],
				description: [
					{ require: true, message: '请输入描述', trigger: 'blur' },
					{ min: 5, max: 150, message: '长度在 5 到 150 个字符', trigger: 'blur' },
				],
			},
			loading: false,
		}
	},
	mounted() {
		if (this.params) this.form = this.params
	},
	methods: {
		// action
		async submit() {
			let $form = this.$refs['form']
			$form.validate(async valid => {
				this.loading = true
				if (valid) {
					let { data } = await Category.createCategory({ data: this.form })
					if (data.code == 200) {
						this.$message.success(data.msg)
						this.resetForm()
					} else {
						this.$message.error(data.msg)
					}
					this.loading = false
				} else {
					this.loading = false
					return false
				}
			})
		},
		async update(id) {
			let { data } = await Category.updateCategory(id, { data: this.form })
			return data
		},
		resetForm() {
			this.$refs['form'].resetFields()
		},
	},
}
</script>
<template>
	<el-row>
		<el-col :lg="mode == 'MESSAGE_BOX' ? 24 : 12">
			<el-form ref="form" :rules="rules" :model="form" label-width="80px" status-icon>
				<el-form-item label="作者名称" prop="username">
					<el-input v-model="form.username" placeholder="输入作者名称"></el-input>
				</el-form-item>
				<el-form-item label="作者密码" prop="password">
					<el-input v-model="form.password" show-password placeholder="6-18位字母/数字/下划线的组合"></el-input>
				</el-form-item>
				<el-form-item label="邮箱地址" prop="email">
					<el-autocomplete
						class="inline-input"
						v-model="form.email"
						:fetch-suggestions="querySearch"
						placeholder="请输入邮箱"
						:trigger-on-focus="false"
					></el-autocomplete>
				</el-form-item>
				<el-form-item label="个人网站" prop="website">
					<el-input v-model="form.website" placeholder="您的个人网站">
						<template slot="prepend">http://</template>
					</el-input>
				</el-form-item>
				<el-form-item label="个性签名" prop="comment">
					<el-input
						v-model="form.comment"
						type="textarea"
						maxlength="150"
						:autosize="{ minRows: 3, maxRows: 6 }"
						show-word-limit
						placeholder="这里输入您的个性签名"
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
import Author from '@/services/models/author'
export default {
	props: ['params', 'mode'],
	data() {
		let checkUsername = async (rule, value, callback) => {
			if (!value) {
				return callback(new Error('用户名不能为空'))
			}
			let { data } = await Author.checkName({ data: this.form })
			if (data.code != 200) {
				return callback(new Error(data.msg))
			} else {
				return callback()
			}
		}

		return {
			form: {
				id: '',
				username: '',
				password: '',
				email: '',
				comment: '',
				website: '',
			},
			loading: false,
			rules: {
				username: [{ validator: checkUsername, trigger: 'blur' }],
				email: [{ min: 5, max: 150, message: '长度在 5 到 150 个字符', trigger: 'blur' }],
				website: [{ min: 5, max: 150, message: '长度在 5 到 150 个字符', trigger: 'blur' }],
			},
			email_suffixs: [
				{ suffix: '@qq.com' },
				{ suffix: '@163.com' },
				{ suffix: '@126.com' },
				{ suffix: '@sina.com' },
				{ suffix: '@189.com' },
				{ suffix: '@aliyun.com' },
				{ suffix: '@sohu.com' },
				{ suffix: '@hotmail.com' },
			],
		}
	},
	mounted() {
		if (this.params) this.form = this.params
	},
	methods: {
		async submit() {
			this.loading = true
			let { data } = await Author.createAuthor({ data: this.form })
			this.loading = false
			if (data.code == 200) {
				this.$message.success(data.msg)
				this.$refs['form'].resetFields()
			} else {
				this.$message.error(data.msg)
			}
		},
		async update(id) {
			return await Author.updateAuthor(id, { data: this.form })
		},
		querySearch(queryString, next) {
			var sfx = this.email_suffixs
			var results = sfx.map(item => {
				return {
					value: queryString + item.suffix,
				}
			})
			// 调用 next 返回建议列表的数据
			next(results)
		},
		resetForm() {
			this.$refs['form'].resetFields()
		},
	},
}
</script>
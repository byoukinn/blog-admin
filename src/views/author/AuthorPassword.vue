<template>
	<el-row>
		<el-col :lg="mode == 'MESSAGE_BOX' ? 24 : 12">
			<el-form ref="form" :rules="rules" :model="form" label-width="80px" status-icon>
				<el-form-item label="作者名称" prop="username">{{form.username}}}</el-form-item>
				<el-form-item label="原始密码" prop="oPassword">
					<el-input v-model="form.oPassword" show-password placeholder="6-18位字母/数字/下划线的组合"></el-input>
				</el-form-item>
				<el-form-item label="修改密码" prop="uPassword">
					<el-input v-model="form.uPassword" show-password placeholder="6-18位字母/数字/下划线的组合"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="cPassword">
					<el-input v-model="form.cPassword" show-password placeholder="6-18位字母/数字/下划线的组合"></el-input>
				</el-form-item>
				<el-form-item v-if="mode != 'MESSAGE_BOX'">
					<el-button type="primary" @click="submit" v-loading="loading">修改密码</el-button>
					<el-button @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
import Author from '@/services/models/author'
export default {
	props: ['user'],
	data() {
		let checkOPassword = async (rule, value, callback) => {
			if (!value) {
				return callback(new Error('密码不能为空'))
			} else if (!/\d\w{5,17}/.test(value)) {
				return callback(new Error('密码必须是6-18位字母/数字/下划线的组合'))
			}
			this.loading = true
			let res = await Author.checkPassword(this.form.id, this.form)
			this.loading = false
			if (res.code != 200) {
				callback(new Error('原密码不正确'))
			}
			callback()
		}
		let checkUPassword = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('密码不能为空'))
			} else if (!/\d\w{5,17}/.test(value)) {
				return callback(new Error('密码必须是6-18位字母/数字/下划线的组合'))
			}
			return callback()
		}

		let checkCPassword = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('密码不能为空'))
			}
			if (value != this.form.cPassword) {
				return callback(new Error('两次输入的密码不相同'))
			}
			return callback()
		}

		return {
			loading: true,
			form: {
				id: '',
				username: '',
				oPassword: '',
				cPassword: '',
				uPassword: '',
			},
			rules: {
				oPassword: [{ validater: checkOPassword, trigger: 'blur' }],
				cPassword: [{ validater: checkUPassword, trigger: 'blur' }],
				uPassword: [{ validater: checkCPassword, trigger: 'blur' }],
			},
		}
	},
	created() {
		this.form = this.user
	},
	methods: {
		async submit() {
			let res = await Author.update(this.id, this.form)
			//TODO: 把axios的data抽出去
			if (res.code == 200) {
				this.$message.success(res.msg)
				this.resetForm()
			} else {
				this.$message.error(res.msg)
			}
		},
		async update(id) {
			let res = await Author.update(id, this.form)
			return res
		},
	},
}
</script>

<style>
</style>
 
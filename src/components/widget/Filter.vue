<template>
	<el-form>
		<el-form-item label="特殊资源" prop="resource">
			<el-radio-group v-model="form.resource">
				<el-radio label="线上品牌商赞助"></el-radio>
				<el-radio label="线下场地免费"></el-radio>
			</el-radio-group>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data() {
		return {
			form: {},
		}
	},
}
</script>

<style>
</style>
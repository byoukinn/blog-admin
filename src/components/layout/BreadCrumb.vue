<template>
	<el-breadcrumb separator="/">
		<el-breadcrumb-item v-for="p in paths" :key="p.id" :to="{path: p.path}">{{p.meta.title}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
export default {
	computed: {
		paths() {
			return this.$route.matched.slice(1, this.$route.matched.length)
		},
	},
}
</script>

<style >
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
	color: aliceblue;
}
</style>
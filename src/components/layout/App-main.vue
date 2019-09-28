<template>
	<section class="app-main">
		<header class="header">
			<el-row>
				<el-col :span="12">
					<h3 class="title">{{ $route.meta.title }}</h3>
				</el-col>
				<el-col :sm="12" :md="{push:4, span:8}">
					<el-input placeholder="请输入内容" v-model="filter" size="small">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
			</el-row>
		</header>
		<transition name="fade" mode="out-in">
			<div>
				<el-card class="app-card">
					<router-view></router-view>
				</el-card>
			</div>
		</transition>
	</section>
</template>

<script>
export default {
	computed: {
		filter: {
			get() {
				return this.$store.state.filter
			},
			set(value) {
				this.$store.commit('updateFilter', value)
			},
		},
	},
	watch: {
		$route: function() {
			this.filter = ''
		},
	},
}
</script>

<style scoped>
.app-card {
	margin: 24px 16px;
}
.header {
	padding: 16px;
	background: rgb(255, 255, 255);
}

.title {
	padding-left: 8px;
}
.fade-enter-active,
.fade-leave-active {
	transition-timing-function: linear;
	transition: 0.4s;
	opacity: 1;
	transform: translate(0px, 0px);
}
.fade-enter,
.fade-leave-active {
	transition: 0.4s;
	opacity: 0;
	transform: translate(25px, 0px);
}
.fade-enter {
	transform: translate(-25px, 0px);
}
</style>

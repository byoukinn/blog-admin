<template>
	<div class="home fill-height">
		<el-container class="fill-height">
			<el-aside class="fill-height aside" :class="{'aside--collapse': collapse}">
				<el-header class="header">
					<p
						class="el-icon-menu sidebar-control"
						:class="{'active': collapse}"
						@click="collapse = !collapse"
						circle
					></p>
					<transition name="fade">
						<p class="logo" v-if="!collapse">博客系统</p>
					</transition>
				</el-header>
				<NavMenu class="fill-height" :collapse="collapse" />
			</el-aside>
			<el-main class="main">
				<!-- 拆分，手动写tabs -->
				<Tabs />

				<app-main />
				<el-footer>
					<Footer />
				</el-footer>
			</el-main>
		</el-container>
	</div>
</template>

<script>
// @ is an alias to /src
import { NavMenu, Tabs, AppMain, BreadCrumb, Footer } from '@/components/layout'
import os from '@/lib/os'

export default {
	name: 'home',
	components: {
		NavMenu,
		Tabs,
		AppMain,
		BreadCrumb,
		Footer,
	},
	data() {
		return {
			collapse: false,
		}
	},
	created() {
		if (!os.isPc) {
			this.collapse = false
		}
	},
}
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	background: #303133;
	color: #c0c4cc;
}
.header--collapse {
	width: 64px;
}
.header .append {
	display: flex;
	justify-content: flex-end;
}
.main {
	padding: 0px;
}
.logo {
	overflow: hidden;
}
.aside {
	transition: 400ms;
	width: 200px !important;
	overflow-y: hidden;
}
.aside--collapse {
	width: 64px !important;
}
.header p ~ p {
	padding-left: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.sidebar-control {
	background: #303133;
	border: 0;
	font-size: 1.25rem;
	line-height: 1.25rem;
	transition: 400ms;
}
.sidebar-control:hover {
	cursor: pointer;
}
.sidebar-control.active {
	transform: rotate(45deg);
}
.fade-enter-active,
.fade-leave-active {
	transition: 0.2s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

<template>
	<el-row class="fill-height">
		<el-col :span="24" class="fill-height">
			<el-menu
				class="nav-vertical fill-height"
				background-color="#303133"
				text-color="#fff"
				:router="true"
				:collapse="collapse"
				:collapse-transition="false"
				active-text-color="#E6A23C"
			>
				<template v-for="child in navBarList">
					<el-submenu :index="child.title" :key="child.id">
						<template slot="title">
							<i :class="child.icon"></i>
							<span>{{child.title}}</span>
						</template>

						<!-- child -->
						<el-menu-item v-for="grandson in child.children" :key="grandson.id" :index="grandson.path">
							<i :class="grandson.icon"></i>
							<span slot="title">{{grandson.title}}</span>
						</el-menu-item>
					</el-submenu>
					<!-- child -->
					<el-menu-item v-if="child.hidden != true && child.path" :index="child.path" :key="child.id">
						<i :class="child.icon"></i>
						<span slot="title">{{child.title}}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {
		collapse: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapGetters(['navBarList']),
	},
}
</script>

<style scoped>
.a {
	color: rgb(66, 66, 66);
}
.nav-vertical {
	border: 0;
}
</style>


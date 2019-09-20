<template>
	<el-row class="fill-height">
		<el-col :span="24" class="fill-height">
			<!-- <el-button @click="collapse = !collapse">折叠</el-button> -->
			<el-menu
				default-active="2" 
				class="nav-vertical fill-height"
				background-color="#303133"
				text-color="#fff"
				:router="true"
				:collapse="collapse"
				active-text-color="#E6A23C"
			>
				<NavMenuItem v-for="item in navBarList" :key="item.id" :data="item" />
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
import NavMenuItem from '@/components/layout/NavMenuItem.vue'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			collapse: false,
		}
	},
	computed: {
		...mapGetters(['navBarList']),
	},
	created() {
		console.log('钩子', this.navBarList)
	},
	components: {
		NavMenuItem,
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


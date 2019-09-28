<template>
	<el-row>
		<el-col>
			<div class="content">
				<p>
					开发版本号：
					<span class="hl">{{version}}</span>
				</p>
				<p>开发日期：{{productDate.toLocaleString()}}</p>
				<p>运行时间：{{runningTime}}</p>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import dataFormat from '@/lib/dateFormater'
export default {
	data: function() {
		return {
			version: 'a0.1.1',
			productDate: new Date('2019-9-15 18:36:24'),
			runningTime: null,
			popover: false,
			islogged: false,
			author: {
				name: 'bk',
				mail: '1209418977@qq.com',
				wechat: 'byoukinn',
			},
		}
	},
	created: function() {
		this.updateRunningTime()
	},
	methods: {
		updateRunningTime: function() {
			var d = new Date(new Date() - new Date(this.productDate))
			this.runningTime = dataFormat('MM 月 dd 天 hh 时 mm 分 ss 秒', d)
			setTimeout(this.updateRunningTime, 1000)
		},
	},
}
</script>

<style scoped>
.text {
	font-size: 14px;
}

.hl {
	color: #f0bf3b;
	background: #5f5f5f;
	font-size: 14px;
	padding: 2px 4px;
	border-radius: 4px;
}

.content {
	font-size: 14px;
	line-height: 32px;
}
</style>
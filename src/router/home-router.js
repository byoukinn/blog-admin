import stageConfig from '@/config/stage'

// 深度遍历配置树, 摘取叶子节点作为路由部分
function dfs(config, callback) {
	if (Array.isArray(config)) {
		config.forEach(subConfig => {
			dfs(subConfig, callback)
		})
	} else if (config.children) {
		config.children.forEach(subConfig => {
			dfs(subConfig, callback)
		})
	} else {
		callback(config)
	}
}

const homeRouter = []

// 构建路由
dfs(stageConfig, item => {
	const viewRouter = {
		path: item.route,
		name: item.name,
		component: () => import(`@/${item.filePath}`),
		meta: {
			title: item.title,
			right: item.right,
			icon: item.icon,
			type: item.type,
		},
	}
	homeRouter.push(viewRouter)
})

export default homeRouter

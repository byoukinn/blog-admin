import os from '@/lib/os'

let stageMap = {}
let dfs = (total, callback) => {
	if (Array.isArray(total)) {
		for (var i of total) {
			dfs(i, callback)
		}
	} else if (total.children) {
		dfs(total.children, callback)
		callback(total)
	} else {
		callback(total)
	}
}

let initCollapse = false
export const sideBarCollapse = state => {
	const { sideBarCollapse } = state
	// 如果是移动端第一次进来就折叠面板
	if (!initCollapse && !os.isPc) {
		initCollapse = true
		sideBarCollapse = false
	}
	return sideBarCollapse
}

export const navBarList = state => {
	const { stageConfig } = state
	console.log('课程 ', state)

	dfs(stageConfig, item => {
		stageMap[item.name] = item
	})

	let deepGetList = target => {
		if (Array.isArray(target)) {
			const acc = target.map(item => deepGetList(item))
			return acc.filter(item => item !== null)
		}

		// 检测是否需要在导航中显示
		if (!target.inNav) {
			return null
		}

		if (target.type === 'folder') {
			// 处理 folder 模式
			const sideConfig = {}
			sideConfig.name = target.name
			sideConfig.title = target.title
			sideConfig.icon = target.icon
			sideConfig.path = target.route
			sideConfig.children = target.children.map(item => deepGetList(item))
			sideConfig.children = sideConfig.children.filter(item => item !== null)
			return sideConfig
		}

		// 处理一级就是 view 的情况
		if (target.type === 'view') {
			const sideConfig = {}
			sideConfig.name = target.name
			sideConfig.title = target.title
			sideConfig.icon = target.icon
			sideConfig.path = target.route
			return sideConfig
		}

		// 处理 appTab 情况
		if (target.type === 'tab') {
			const sideConfig = {}
			sideConfig.name = target.name
			sideConfig.title = target.title
			sideConfig.icon = target.icon
			sideConfig.path = target.route
			// 如果 Tab 没有设置默认打开的路由, 则设置为第一个子节点路由
			if (!sideConfig.path) {
				if (target.children && target.children.length > 0 && target.children[0].route) {
					sideConfig.path = target.children[0].route
				}
			}
			return sideConfig
		}

		// 最后一层, 都当做子节点处理
		// if (level <= 0) {
		// 	const sideConfig = {}
		// 	sideConfig.name = target.name
		// 	sideConfig.title = target.title
		// 	sideConfig.icon = target.icon
		// 	// 最后一层的路由路径
		// 	if (target.children && target.children.length > 0 && target.children[0].route) {
		// 		sideConfig.path = target.children[0].route
		// 	}
		// 	return sideConfig
		// }
		return null
	}
	return deepGetList(stageConfig)
}

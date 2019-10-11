// 让系统加载此文件

const DevService = $store => {
	let props = {
		isDev: process.env.NODE_ENV == 'development',
		$store: $store,
	}
	let methods = {
		autoLogin: function(username, password) {
			$store.dispatch('login', { username, password })
		},
	}
	return () => {
		if (!props.isDev) return
		methods.autoLogin(process.env.VUE_APP_USERNAME, process.env.VUE_APP_PASSWORD)
	}
}

export default DevService

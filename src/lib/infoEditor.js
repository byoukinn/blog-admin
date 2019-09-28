import Vue from 'vue'
let index = 1
export default async (vm, options) => {
	index++
	let h = vm.$createElement
	let config = {
		key: index,
		props: {
			params: Object.assign({}, options.data), // 数据唯一化，不影响原有数据
			mode: 'MESSAGE_BOX', // 用于给子组件适配宽高
		},
	}
	let option = {
		showCancelButton: options.showCancelButton || true,
		showConfirmButton: options.showConfirmButton || true,
		showCancelButton: options.confirmButtonText || '更新信息',
		title: options.title || '编辑信息',
		message: h(options.component || 'div', config),
		beforeClose: async (action, instance, done) => {
			let comp = instance.$slots.default[0].componentInstance // 窗体slot内的组件实例
			if (action === 'confirm') {
				instance.confirmButtonLoading = true
				instance.confirmButtonText = '执行中...'
				let res = await comp.update(options.data.id)
				res = res.data ? res.data : res
				instance.confirmButtonLoading = false
				if (res.code == 200) {
					vm.$message.success(res.msg)
					options.onsuccess && options.onsuccess()
					done()
				} else {
					vm.$message.error(res.msg)
					options.onerror && options.onerror()
					instance.confirmButtonText = options.confirmButtonText || '更新信息'
				}
			} else {
				done()
			}
		},
	}
	let res = await vm.$msgbox(option)
	return res
}

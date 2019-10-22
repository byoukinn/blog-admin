import { get, post, put, delete as _delete } from 'axios'

class Category {
	async createCategory(data) {
		let res = await post('/api/category', data)
		return res
	}
	async getCategorys(page = 1, rowSize = 20) {
		let res = await get(`/api/categorys/${page}/${rowSize}`)
		return res
	}
	async updateCategory(id, data) {
		let res = await put(`/api/category/${id}`, data)
		return res
	}
	async getCategory(id) {
		let res = await get(`/api/category/${id}`)
		return res
	}
	async deleteCategory(id) {
		let res = await _delete(`/api/category/${id}`)
		return res
	}
	async checkName(data) {
		let res = await post('/api/checkCategoryName/', data)
		return res
	}
}

export default new Category()

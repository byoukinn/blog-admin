import { get, post, put, delete as _delete } from 'axios'

class Tag {
	async createTag(data) {
		let res = await post('/api/tag', data)
		return res
	}
	async updateTag(id, data) {
		let res = await put(`/api/tag/${id}`, data)
		return res
	}
	async getTags(page = 1, row = 20) {
		let res = await get(`/api/tags/${page}/${row}`)
		return res
	}
	async getTag(article_id) {
		let res = await get(`/api/tag/${article_id}`)
		return res
	}
	async deleteTag(id) {
		let res = await _delete(`/api/tag/${id}`)
		return res
	}
}

export default new Tag()

import { get, post, put, delete as _delete } from 'axios'

class Article {
	async createArticle(data) {
		let res = await post('/api/article', data)
		return res
	}
	async getArticles() {
		let res = await get('/api/article')
		return res
	}
	async updateArticle(id, data) {
		let res = await put(`/api/article/${id}`, data)
		return res
	}
	async getArticle(id) {
		let res = await get(`/api/article/${id}`)
		return res
	}
	async deleteArticle(id) {
		let res = await _delete(`/api/article/${id}`)
		return res
	}
}

export default new Article()

import { get, post, put, delete as _delete } from 'axios'

class Article {
	async createArticle(data) {
		let res = await post('/api/article', data)
		return res
	}
	async getArticlesWithParams(data) {
		let res = await post('/api/getArticleWithParams', data)
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
	// 邪恶的东西，不建议用
	async getArticles(params) {
		let str = '?'
		Object.entries(params).forEach(i => (str += `${i[0]}=${i[1]}&`))
		str.substr(0, str.length - 1) // 去掉最后一个 &
		let res = await get(`/api/article${str}`)
		return res
	}
}

export default new Article()

import { get, post, put, delete as _delete } from 'axios'

class Author {
	async login(data) {
		let res = await post('/api/login', data)
		return res
	}
	async logout(data) {
		let res = await post('/api/logout', data)
		return res
	}
	async createAuthor(data) {
		let res = await post('/api/author', data)
		return res
	}
	async getAuthors(page = 1, rowSize = 20) {
		let res = await get(`/api/author/${page}/${rowSize}`)
		return res
	}
	async updateAuthor(id, data) {
		let res = await put(`/api/author/${id}`, data)
		return res
	}
	async getAuthor(id) {
		let res = await get(`/api/author/${id}`)
		return res
	}
	async deleteAuthor(id) {
		let res = await _delete(`/api/author/${id}`)
		return res
	}
	async checkName(data) {
		let res = await post(`/api/checkAuthorName`, data)
		return res
	}
	async checkPassword(id, data) {
		let res = await post(`/api/checkPassword`, data)
		return res
	}
}

export default new Author()

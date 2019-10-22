import { get, post, put, delete as _delete } from 'axios'

class Comment {
	async createComment(data) {
		let res = await post('/api/comment', data)
		return res
	}
	async updateComment(id, data) {
		let res = await put(`/api/comment/${id}`, data)
		return res
	}
	async getComments(page = 1, row = 20) {
		let res = await get(`/api/comments/${page}/${row}`)
		return res
	}
	async getComment(article_id) {
		let res = await get(`/api/comment/${article_id}`)
		return res
	}
	async deleteComment(id) {
		let res = await _delete(`/api/comment/${id}`)
		return res
	}
}

export default new Comment()

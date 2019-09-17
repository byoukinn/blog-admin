import {
    get,
    post,
    put,
    _delete
} from 'axios'
import store from '../../store'

class Author {
    async login(data) {
        let res = await post('api/login', data)
        if (res.code == 200) {
            store.dispatch('login', data)
        }
        return res
    }
    async logout(data) {
        let res = await post('api/logout', data)
        return res
    }
    async getAuthorList() {
        let res = await get('api/author')
        return res
    }
    async createAuthor(data) {
        let res = await post('api/author', data)
        return res
    }
    async getAuthors() {
        let res = await get('api/author')
        return res
    }
    async updateAuthor(data) {
        let res = await put('api/author', data)
        return res
    }
    async getAuthor(id) {
        let res = await get(`api/author/${id}`)
        return res
    }
    async deleteAuthor(id) {
        let res = await _delete(`api/author/${id}`)
        return res
    }
}

export default new Author()
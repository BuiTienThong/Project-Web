import axios from 'axios';

const url = import.meta.env.VITE_APP_API_URL;
class BookService {
    constructor() {
    this.baseUrl = `${url}/api/books`;
    this.api = axios.create({
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
}

    async getMany() {
        return (await this.api.get(this.baseUrl)).data;
    }

    async create(book) {
        return (await this.api.post(this.baseUrl, book)).data;
    }

    async deleteMany() {
        return (await this.api.delete(this.baseUrl)).data;
    }

    async get(id) {
        return (await this.api.get(`${this.baseUrl}/${id}`)).data;
    }

    async update(id, book) {
        return (await this.api.put(`${this.baseUrl}/${id}`, book)).data;
    }

    async delete(id) {
        return (await this.api.delete(`${this.baseUrl}/${id}`)).data;
    }
}
export const bookService = new BookService();
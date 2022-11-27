const knex = require('../database/knex');

class BookService {
    constructor() {
        this.books = knex('books');
    }

    #getBook(payload) {
        const book = { ...payload };
        const bookProperties = [
            "name", "author", "address", "favorite"
        ];

        // Remove non-contact properties
        Object.keys(book).forEach(function(key) {
            if (bookProperties.indexOf(key) == -1) {
                delete book[key];
            }
        });
            return book;
        
    }

    async create(payload) {
        const book = this.#getBook(payload);
        const [id] = await this.books.insert(book);
        return { id, ...book };
    }

    async all() {
        return await this.books.select('*');
           
    }

    async findByName(book_title) {
        return await this.books
            .where('book_title', 'like', `%${book_title}%`)
            .select('*');
    }

    async findById(id) {
        return await this.books.where('id', id).select('*').first();
    }

    async update(id, payload) {
        const update = this.#getBook(payload);
        return await this.books.where('id', id).update(update);
    }

    async delete(id) {
        return await this.books.where('id', id).del();
    }

    async deleteAll() {
        return await this.books.del();
    }
        

    //Define methods for accessing the DB
}

module.exports = BookService;
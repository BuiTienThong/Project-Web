const knex = require('../database/knex');

class BookService {
    constructor() {
        this.books = knex('books');
    }

    #getBook(payload) {
        const book = { ...payload };
        const bookProperties = [
        "book_title", "book_author", "date"
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

        

    //Define methods for accessing the DB
}

module.exports = BookService;
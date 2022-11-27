exports.create = (req, res) => {
    return res.send({message: 'create book'});
};

exports.findAll = (req, res) => {
    return res.send({message: 'findAll book'});
};

exports.findOne = (req, res) => {
    return res.send({message: 'findOne book'});
};

exports.update = (req, res) => {
    return res.send({message: 'update book'});
};

exports.delete = (req, res) => {
    return res.send({message: 'delete book'});
};

exports.deleteAll = (req, res) => {
    return res.send({message: 'deleteAll book'});
};

exports.findAllFavorite = (req, res) => {
    return res.send({message: 'findAllFavorite book'});
};


const BookService = require('../services/books.service');
const ApiError = require('../api-error');


//Create and Save new books
exports.create = async (req, res, next) => {
    if(!req.body.name) {
        return next(new ApiError(400, 'Name canot be empty'));
    }

    try {
        const bookService = new BookService();
        const book = await bookService.create(req.body);
        return res.send(book);
    }catch (error) {
        console.log(error);
        return next(
            new ApiError(500,'An error occured')
        );

    }
};

//Find all books
exports.findAll = async (req, res, next) => {
    let books = [];

    try {
        const bookService = new BookService();
        const {name} = req.query;
        if (name) {
            books = await bookService.findByName(name);
        }else{
            books = await bookService.all();
        }
    }catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error ocurred')
        );
    }
    return res.send(books);
};

//Find one book
exports.findOne = async (req, res, next) => {
    try {
        const bookService =  new BookService();
        const book = await bookService.findById(req.params.id);
        if(!book) {
            return next(new ApiError(404, 'Book not found'));
        }
        return res.send(book);
    }catch (error) {
        console.log(error);
            return next(
                new ApiError(
                    500,
                    `Error retrieving book with id=${req.params.id}`
                )
            );
        
    }
};

//Update book
exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Data to update cannot be empty'));
    }

    try {
        const bookService = new BookService();
        const updated = await bookService.update(req.params.id, req.body);
        if(!updated) {
            return next(new ApiError(404, 'Book not found'));
        }
        return res.send({message: 'Book was updated successfully'});
    } catch (error) {
        console.log(error);
        return next(
            new ApiError (500, `Error updating book with id=${req.params.id}`)
        );
    }
};

//Delete books
exports.delete = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const deleted = await bookService.delete(req.params.id);
        if(!deleted) {
            return next(new ApiError(404, 'Book not found'));
        }
        return res.send({message: 'Book was deleted successfully'});
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Could not delete book with id=${req.params.id}`
            )
        );
    }
};

//Delete All
exports.deleteAll = async (req, res, next) => {
    try {
        const bookService = new BookService();
        const deleted = await bookService.deleteAll();
        return res.send({
            message: `${deleted} books were deleted successfully`,
        });
    }catch (error) {
        console.log(error);
        return next (
            new ApiError(500, 'An error occured')
        );
    }
};


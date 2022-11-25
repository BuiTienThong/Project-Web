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

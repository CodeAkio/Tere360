let mongoose = require('mongoose');

module.exports = () => {
    let schema = mongoose.Schema({
        nome: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        email: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Estabelecimento', schema, 'estabelecimentos');
};
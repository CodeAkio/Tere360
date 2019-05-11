let mongoose = require('mongoose');

module.exports = () => {
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        }
    })

    return mongoose.model('Usuario', schema, 'usuarios');
}
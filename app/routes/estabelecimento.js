let auth = require('../../config/auth').auth;

module.exports = (app) => {
    let controller = app.controllers.estabelecimento;

    app.get('/estabelecimento', controller.index);
    app.post('/estabelecimento', auth.authenticate, controller.newItem);
    //app.put('/estabelecimento/edit/:id', auth.authenticate, controller.edit);
    app.delete('/estabelecimento/remove/:id', auth.authenticate, controller.remove);
}
let auth = require('../../config/auth').auth;

module.exports = (app) => {
    let controller = app.controllers.formulario;

    app.get('/estabelecimento/formulario/:id', controller.index);
    app.post('/estabelecimento/formulario', controller.agendarHorario);
}
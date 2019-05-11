module.exports = (app) => {
    let controller = app.controllers.login;

    app.get('/login', controller.index);
    app.post('/login', controller.login);
}
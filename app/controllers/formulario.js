let login = require('../../config/auth').login;
let emailSender = require('../../config/mail').enviarEmail;

module.exports = (app) => {
    let Estabelecimento = app.models.estabelecimento;

    let controller = {
        index: (req, res) => {
            Estabelecimento.findById(req.params.id).exec().then(estabelecimento => {
                res.render('formulario', {estabelecimento});
            });
        },
        agendarHorario: (req, res) => {
            let id = req.body.id;
            let nome = req.body.nome;
            let email = req.body.email;
            let telefone = req.body.telefone;
            let data = req.body.data;
            let hora = req.body.hora;
            let observacao = req.body.observacao;

            Estabelecimento.findById(id).exec().then(estabelecimento => {
                let rem = estabelecimento.email;
                let statusError = emailSender(rem, {nome, email, telefone, data, hora, observacao});

                if (!statusError) {
                    res.json({message: 'success'});
                } else {
                    res.status(500).end();
                }

                //res.render('formulario', {estabelecimento});
            });
        }
    }

    return controller;
}



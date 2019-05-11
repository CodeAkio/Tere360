let login = require('../../config/auth').login;

module.exports = (app) => {
    let Estabelecimento = app.models.estabelecimento;

    let controller = {
        index: (req, res) => {
            let url = req.protocol + '://' + req.get('host') + req.originalUrl;

            Estabelecimento.find({}, [], {sort: {nome: 1}}).exec().then((estabelecimentos) => {
                res.render('estabelecimento', {estabelecimentos, url});
            })
        },
        newItem: (req, res) => {
            let estabelecimento = new Estabelecimento(req.body);
            estabelecimento.save((err, estabelecimento) => {
                if (err) {
                    res.status(500).end();
                    console.log(err);
                } else {
                    res.json(estabelecimento);
                }
            });    
        },
        remove: (req, res) => {
            Estabelecimento.remove({_id: req.params.id}, (err) => {
                if (!err) {
                    res.json({message: 'success'});
                } else {
                    res.status(500).end();
                }
            })
        }
    }

    return controller;
}
let mongoose = require('mongoose');

module.exports = (url) => {
    mongoose.connect(url);

    mongoose.connection.on('connected', () => {
        console.log('Mongoose conectado em: ' + url);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose desconectado em: ' + url);
    });

    mongoose.connection.on('connected', (err) => {
        console.log('Mongoose Error: ' + err);
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose encerrado!');
            process.exit(0);
        });
    });
}
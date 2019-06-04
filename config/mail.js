let nodemailer = require('nodemailer');

let template = require('./mail-template');

let rem = 'siqueira_2004@hotmail.com';

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: rem,
        pass: '#NyxNemesis8*'
    }
});

module.exports = {
    enviarEmail: (dest, corpo) => {
        let mailOptions = {
            from: rem,
            to: dest,
            bcc: 'contatotere360@gmail.com',
            subject: 'Um novo agendamento foi solicitado',
            html: template(corpo)
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                return error;
            } else {
                console.log('Message sent: ' + info.response);
                return '';
            }
        });
    }
}
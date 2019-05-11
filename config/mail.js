let nodemailer = require('nodemailer');
let fs = require("fs");
let ejs = require("ejs");

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
            subject: 'Um novo agendamento foi solicitado',
            html: `
                </p><strong>Nome:</strong> ${corpo.nome}</p>
                </p><strong>E-mail:</strong> ${corpo.email}</p>
                </p><strong>Telefone:</strong> ${corpo.telefone}</p>
                </p><strong>Data:</strong> ${corpo.data}</p>
                </p><strong>Hora:</strong> ${corpo.hora}</p>
                </p><strong>Observação:</strong> ${corpo.observacao}</p>
            `
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
const nodemailer = require('nodemailer');


module.exports = function (to, subject, text) {
    

    const smtpTransport = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASSWORD }
    });
    //
    //transporter.verify().then(console.log).catch(console.error);


    const message = {
        from: process.env.SMTP_USERNAME,
        to,
        subject,
        text
    }


    smtpTransport.sendMail(message, (err, res) => {
        if (err){
            console.log('Erro ao enviar email: ' + err);
        }
        else{
            console.log('Email enviado com sucesso!');
        }
        // Important! close the server connection
        smtpTransport.close();
    });
}
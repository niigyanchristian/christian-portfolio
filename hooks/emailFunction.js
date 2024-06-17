const nodemailer = require('nodemailer');

const sendMail = (data) => {

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
        }
        h2 {
            color: #333333;
        }
        p {
            line-height: 1.5;
            color: #555555;
        }
        .details {
            margin-top: 20px;
        }
        .details dt {
            font-weight: bold;
        }
        .details dd {
            margin: 0 0 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from your portfolio website contact form. Here are the details:</p>
        <dl class="details">
            <dt>Name:</dt> <dd>${data.name}</dd>
            <dt>Email:</dt> <dd>${data.email}</dd>
            <dt>Phone Number:</dt> <dd>${data.number}</dd>
            <dt>Subject:</dt> <dd>${data.subject}</dd>
            <dt>Message:</dt> <dd>${data.message}</dd>
        </dl>
        <p>Please respond to this message at your earliest convenience.</p>
    </div>
</body>
</html>


    `;

    const main = async () => {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: 'gmail',
            port: 465,
            secure: true,
            // logger: true,
            // debug: true,
            auth: {
                user: 'cniigyan@gmail.com',
                pass:process.env.PASS,
            },
            tls: {
                rejectUnauthorized: true
            }
        });


        // Define the email content
        const mailOptions = {
            from: '"PREDECT" <cniigyan@gmail.com>',
            to: 'niigyanchristian@gmail.com',
            subject: 'Apporval Notification - PREDECT',
            html: html,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    }

    main()
}



module.exports={
    sendMail
}
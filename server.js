
// // app.post('/contact', (req, res) => {
// //     const { name, email, message } = req.body;
// //     // Email sending logic...
// // });


// // app.use(bodyParser.urlencoded({ extended: false }));

// // app.use(bodyParser.json());


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3000;

// // Configure body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// // Serve the HTML form
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // Handle form submission
// app.post('/contact', (req, res) => {
//     const { name, email, message } = req.body;

//     // Set up Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your-email@gmail.com',
//             pass: 'your-email-password'
//         }
//     });

//     // Email options
//     const mailOptions = {
//         from: email,
//         to: 'obhiosad@gmail.com',
//         subject: `Message from ${name}`,
//         text: message
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send('Error sending email');
//         }
//         res.send('Message sent successfully');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

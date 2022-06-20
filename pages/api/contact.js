// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config();

export default function (req, res) {

  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: "login",
      user: process.env.CLIENT_EMAIL,
      pass: process.env.CLIENT_PASS_APP,
    },
    secure: true,
  });

  const mailData = {
    from: 'morganetressens@gmail.com',
    to: 'morganetressens@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <div>
    <h1>Nom : ${req.body.name}</h1>
    <p>son message :<br/> ${req.body.message} </p>
    <p>son mail : ${req.body.email}</p>
    </div>`

  }

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200).json({message:'message envoyé'})
} 

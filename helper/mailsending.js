const nodemailer = require('nodemailer');
const path = require("path");
const sendMail = async() =>{
const dir = path.join(__dirname, "..", "logger" , "error.log");
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user:process.env.EMAIL_USER , 
      pass:process.env.EMAIL_PASSWORD
  }
});
let mailOptions = {
  from: 'bala.44472@gmail.com', 
  to: 'balajee.84068@gmail.com', 
  subject: 'Error',
  text: 'Please find the attached file.', 
  attachments: [
      {
          filename: 'error.txt', 
          path: dir
      }
  ]
};
await transporter.sendMail(mailOptions);
}

module.exports = sendMail;
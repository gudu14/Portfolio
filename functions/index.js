const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();

const nodemailer = require("nodemailer");


function sendmail(name, email, message){

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "smithliya07@gmail.com", 
      pass: "liyabonasmith" 
    }
  });

  transporter.sendMail({
    from: "smithliya07@gmail.com",
    to: "mnyakeni.gudu@gmail.com",
    subject: "firebase server",
    text: "Hello world?",
    html: `
    <p><b>Name<br/></p>
    ${name}
    <p><b>Email<br/></p>
    ${email}
    <p><b>Message</b></p>
    ${message}
    `
  });

}




exports.makeUppercase = functions.database.ref('/messages/{pushId}')
.onCreate((snapshot, context) => {

  const original = snapshot.val();
  var name = original.name;
  var email = original.email;
  var message = original.message;

  sendmail(name, email, message);
  return null;
});


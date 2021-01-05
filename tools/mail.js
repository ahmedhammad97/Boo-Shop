const nodemailer = require("nodemailer");

// const mail = {
//     service: "XXX", // mail service provide eg: gmail
//     user: "XXX", //sender email
//     password: "XXX" // sender password
// }


const mail = {
    service: "gmail",
    user: "booshop.service@gmail.com",
    password: "649D4FDCA50762633F7DDD0159"
}

const sendMail = (target,content)=>{
    
    var transporter = nodemailer.createTransport({
        service: mail.service,
        auth: {
          user: mail.user, 
          pass: mail.password 
        }
      });

    var mailOptions = {
        from : mail.user,
        to : target,
        subject: "Boo Shop Order",
        text: content,
        html: "<p> "+content+" </p>",

    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log("error sending mail: " + err);
        }else{
            console.log("email sent succsesfuly: " + info.response );
        }
    });

};

module.exports = {sendMail};


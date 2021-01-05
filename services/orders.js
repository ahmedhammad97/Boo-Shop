const {sendMail} = require('../tools/mail');
const handleOrder =  (req, res) => {
    if (req.body){
        const order = req.body;
        // const order = {
        //     'mail': 'mohamed.taarek22@gmail.com',
        //      "prodId": 1,
        //     'address': 'number,share3,place',
        // };
        const target = order.email;
        const payload = `We have succesfuly recieved your order directed to the following address: ` + order.address;
        
        const payload2 = `product of ID: ` + order.prodId + ` was ordered towards the following address: ` + order.address;
        sendMail("hammad97official@gmail.com", payload2);
        sendMail(target,payload);
        res.sendStatus(200);
    }else{
        res.status(400).send("bad request");
    }

}

module.exports = { handleOrder }
//649D4FDCA50762633F7DDD0159
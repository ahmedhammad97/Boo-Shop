const {sendMail} = require('../tools/mail');
const handleOrder =  (req, res) => {
    if (req.body.order){
        const order = req.body.order;
        // const order = {
        //     'mail': 'mohamed.taarek22@gmail.com',
        //      "productId": 1,
        //     'address': 'number,share3,place',
        // };
        const target = order.email;
        const payload = `We have succesfuly recieved your order directed to the following address: ` + order.address;
        
        const payload2 = `product of ID: ` + order.prodtId + ` was ordered towards the following address: ` + order.address;
        sendMail("hammad97official@gmail.com",payload2);
        sendMail(target,payload);
        res.sendStatus(200);
    }else{
        res.status(400).send("bad request");
    }

}

module.exports = { handleOrder }
//649D4FDCA50762633F7DDD0159
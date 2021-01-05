const fs = require('fs');
const path = require('path');
const productService = require('../services/products');


const writeProductsToFile = ()=> {
    const currentProducts = productService.getCopyOfProducts();
    const logPath = path.join(__dirname, '..', 'logs', 'snapshot.txt');
    fs.writeFile(logPath, JSON.stringify(currentProducts), function (err) {
        if (err) throw err;
        console.log('Wrote Products Snapshot to Log');
    });
}

const scheduleLogWrite = interval => {
    setInterval(writeProductsToFile, interval);
}

module.exports = { scheduleLogWrite }
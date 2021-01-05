
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const productService = require('./services/products');
const orderService = require('./services/orders');

router.get('/', (req, res) => renderPage("welcome", res));
router.get('/admin', (req, res) => renderPage("admin", res));
router.get('/shop', (req, res) => renderPage("shop", res));


router.get('/products', productService.getAllProducts);
router.post('/addproduct', jsonParser, productService.addProduct);
router.delete('/deleteproduct/:productId', jsonParser, productService.deleteProduct);

router.post('/order', jsonParser, orderService.handleOrder);


const renderPage = (route, res) => {
    const pagePath = path.join(__dirname, 'views', `${route}.html`);
    res.sendFile(pagePath);
};

module.exports = router;
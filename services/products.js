const getAllProducts = (req, res) => {
    res.send({"products": staticProductList});
}

const addProduct = (req, res) => {
    staticProductList.push(req.body);
    res.end();
}

const deleteProduct = (req, res) => {
    staticProductList = staticProductList.filter(product => product["id"] !== parseInt(req.params.productId));
    res.end();
}

const getCopyOfProducts = () => {
    return staticProductList;
}


let staticProductList = [
    {
        "id": 1,
        "name": "Item 1",
        "description": "very fuckin cool product",
        "price": 400,
        "image": "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-0/s600x600/135750659_156643519574427_1008078409997500713_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=gzbFfE-oOHUAX9QJqHL&_nc_ht=scontent-hbe1-1.xx&tp=7&oh=06164d6500cc3aaf72cb6f228ecbded2&oe=601A0363"
    },
    {
        "id": 2,
        "name": "Item 2",
        "description": "very fuckin cool product",
        "price": 300,
        "image": "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/133603740_154501783121934_7573522819507373796_o.jpg?_nc_cat=111&ccb=2&_nc_sid=a26aad&_nc_ohc=k6T8VN1mTuQAX9CFSiy&_nc_ht=scontent-hbe1-1.xx&oh=d9e1a68c3c8edd63f063afcf64e3f414&oe=60184EC9"
    },
    {
        "id": 3,
        "name": "Item 3",
        "description": "very fuckin cool product",
        "price": 250,
        "image": "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/127528372_131293968776049_1831113446798037921_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Al2642dSTM8AX8fUglp&_nc_ht=scontent-hbe1-1.xx&oh=ac8a9fd1584f4a83b6b40b1b2840a76c&oe=601A1419"
    },
    {
        "id": 4,
        "name": "Item 4",
        "description": "very fuckin cool product",
        "price": 300,
        "image": "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/124987503_123875632851216_8664795748384936713_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a26aad&_nc_ohc=q4a4ogopXVgAX8N-i8W&_nc_ht=scontent-hbe1-1.xx&oh=da85486763bd2222c4b3887ccccef243&oe=601AAEBB"
    },
    {
        "id": 5,
        "name": "Item 5",
        "description": "very fuckin cool product",
        "price": 350,
        "image": "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/125985971_128534219052024_8100272970013430906_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ZQ2QrG4zP_MAX9t4P9v&_nc_ht=scontent-hbe1-1.xx&oh=a67d1dc147c396448345cb952f7643c3&oe=60197D51"
    },
]

module.exports = { getAllProducts, addProduct, deleteProduct, getCopyOfProducts };

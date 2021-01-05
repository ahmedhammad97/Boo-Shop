const getAllProducts = (req, res) => {
    res.send({"products": staticProductList});
}

const addProduct = (req, res) => {
    // TO BE CONTINUED
}

const deleteProduct = (req, res) => {
    // TO BE CONTINUED
}


const staticProductList = [
    {
        "id": 1,
        "name": "Item 1",
        "description": "very fuckin cool product",
        "price": 400
    },
    {
        "id": 2,
        "name": "Item 2",
        "description": "very fuckin cool product",
        "price": 300
    },
    {
        "id": 3,
        "name": "Item 3",
        "description": "very fuckin cool product",
        "price": 250
    },
    {
        "id": 4,
        "name": "Item 4",
        "description": "very fuckin cool product",
        "price": 300
    },
    {
        "id": 5,
        "name": "Item 5",
        "description": "very fuckin cool product",
        "price": 350
    },
]
module.exports = { getAllProducts, addProduct, deleteProduct }

const { getCart, addProduct } = require("../controllers/cartController");

const getCartHandler = async (req, res) => {
    try {
        const response = await getCart(req.userId)
        if(response) {
            res.status(200).json(response);
        }
        res.status(204).send();
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const addProductHandler = async (req, res) => {
    
    const userId = req.userId;
    const { productId, quantity } = req.body;
    try {
        const response = await addProduct(userId, productId, quantity)
        res.status(200).send()
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCartHandler,
    addProductHandler
  }
const {
  createProd,
  searchProducts
} = require("../controllers/productController");
const { Product } = require("../db");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      category,
      country,
      price,
      stock,
      amountMl,
      alcoholContent,
    } = req.body;
    console.log(req.body);
    const response = await createProd({name,
      image,
      description,
      country,
      price,
      stock,
      category,
      amountMl,
      alcoholContent,});
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allProducts = async (req, res) => {
  try {
    const { query, country, order } = req.query;
    const response = await searchProducts(query, country, order)
    return res.status(200).json(response);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
};

const product = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findByPk(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProduct, allProducts, product };

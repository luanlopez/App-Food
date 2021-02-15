const ProductModel = require('../models/products.models');

class ProductController {
  async createProduct(req, res) {
    try {
      const createProduct = await ProductModel.create({
        ...req.body,
      });

      return res
        .status(201)
        .json({ createProduct, message: 'Product created with success!' });
    } catch (error) {
      return res.status(400).json({ error, message: 'Product not created :(' });
    }
  }

  async getProducts(req, res) {
    const products = await ProductModel.find();

    return res.json({ products }).status(200);
  }

  async getProductById(req, res) {
    const { id } = req.params;

    const product = await ProductModel.findById(id);

    return res.json({ product }).status(200);
  }

  async updateProduct(req, res) {
    const { productId } = req.params;

    const findProductById = await ProductModel.findById(productId);

    if (!findProductById) {
      return res.status(404).json({ error: 'Product does not exist!' });
    }

    const updatedProduct = await findProductById.update({
      ...req.body,
    });

    return res.json({ updatedProduct }).status(200);
  }

  async deleteProduct(req, res) {
    const { id } = req.params;

    const productFounded = await ProductModel.findById(id);

    if (!productFounded) {
      return res.status(404).json({ message: 'Product does not exist :(' });
    }

    await ProductModel.deleteOne({ _id: id });

    return res.status(204);
  }
}

module.exports = new ProductController();

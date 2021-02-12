const ProductController = require('../controllers/product.controller')

module.exports = (router) => {
  router.get('/products', ProductController.getProducts);
  router.post('/products', ProductController.createProduct);
  router.get('/products/:id', ProductController.getProductById);
  router.delete('/products/:id', ProductController.deleteProduct);
};

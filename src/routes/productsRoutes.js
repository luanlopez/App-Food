module.exports = (router) => {
  router.get('/products');
  router.post('/products');
  router.patch('/users/:product_id');
  router.get('/users/:user_id');
  router.delete('/users/:user_id');
};
const OrderController = require('../controllers/order.controller');

module.exports = (router) => {
  router.get('/orders', OrderController.getOrders);
  router.get('/orders/:order_id', OrderController.getOrderById);
  router.get('/orders/store/:store_id', OrderController.getOrdersByStore);
  router.get('/orders/seller/:seller_id', OrderController.getOrdersBySeller);
  router.post('/orders', OrderController.createOrder);
  router.patch('/orders/:orderId', OrderController.cancelOrder);
  router.put('/orders/:orderId', OrderController.updateOrder);
};

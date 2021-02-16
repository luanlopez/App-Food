const OrderModel = require('../models/orders.models');

class OrderController {
  async createOrder(req, res) {
    try {
      const createOrder = await OrderModel.create({ ...req.body });

      return res.status(201).json({
        createOrder,
        message: 'Order created with successfuly!',
      });
    } catch (error) {
      return res.status(400).json({ error, message: 'Order is not created!' });
    }
  }

  async getOrders(req, res) {
    try {
      const getOrders = await OrderModel.find();

      return res.status(200).json({ totalOrders: getOrders.length, getOrders });
    } catch (error) {
      return res.status(404).json({ error, message: 'Without orders!' });
    }
  }

  async getOrderById(req, res) {
    try {
      const { order_id } = req.params;

      const getOrder = await OrderModel.findById(order_id);

      return res.status(200).json({ getOrder });
    } catch (error) {
      return res.status(404).json({ error, message: 'Order not orders!' });
    }
  }

  async getOrdersByStore(req, res) {
    try {
      const { store_id } = req.params;

      const getOrdersByStore = await OrderModel.find({ store_id });

      return res.status(200).json({
        totalOrders: getOrdersByStore.length,
        getOrdersByStore,
      });
    } catch (error) {
      return res.status(404).json({ error, message: 'Without orders of Store!' });
    }
  }

  async getOrdersBySeller(req, res) {
    try {
      const { seller_id } = req.params;

      const getOrdersBySeller = await OrderModel.find({ seller_id });

      return res.status(200).json({
        totalOrders: getOrdersBySeller.length,
        getOrdersBySeller,
      });
    } catch (error) {
      return res.status(404).json({ error, message: 'Without orders of Seller!' });
    }
  }

  async cancelOrder(req, res) {
    try {
      const { orderId } = req.params;

      const findOrder = await OrderModel.findById(orderId);

      if (!findOrder) {
        return res.status(404).json({
          message: 'Order not found!',
        });
      }

      await OrderModel.updateOne(
        { _id: orderId },
        {
          status: 'CANCELED',
        }
      );

      return res.status(200).json({
        message: 'Order canceled with successfuly!',
        findOrder,
      });
    } catch (error) {
      return res.status(404).json({
        error,
        message: 'Error in canceled order',
      });
    }
  }

  async updateOrder(req, res) {
    try {
      const { orderId } = req.params;

      const findOrderById = await OrderModel.findById(orderId);

      if (!findOrderById) {
        return res.status(404).json({ error: 'Order not founded!' });
      }

      await findOrderById.updateOne({
        ...req.body,
      });

      return res.status(200).json({ order: findOrderById, updated: true });
    } catch (error) {
      return res.status(400).json({ error, updated: false });
    }
  }
}

module.exports = new OrderController();

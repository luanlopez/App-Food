const OrderModel = require('../models/orders.models');

class OrderController {

    async createOrder(req, res) {

        try {

            const createOrder = await OrderModel.create({
                ...req.body
            });
            return res.status(201).json({
                createOrder,
                message: 'Order created with successfuly!'
            });

        } catch (error) {

            return res.status(400).json({
                error,
                message: 'Order is not created!'
            });
        }

    }

    async getOrders(req, res) {

        try {

            const getOrders = await OrderModel.find();
            return res.status(200).json({
                totalOrders: getOrders.length,
                getOrders
            });

        } catch (error) {
            return res.status(404).json({
                error,
                message: 'Without orders!'
            });

        }

    }

    async getOrdersByStore(req, res) {

        try {

            const {
                store_id
            } = req.params;

            const getOrdersByStore = await OrderModel.find({
                store_id
            });
            return res.status(200).json({
                totalOrders: getOrdersByStore.length,
                getOrdersByStore
            });

        } catch (error) {
            return res.status(404).json({
                error,
                message: 'Without orders!'
            });

        }

    }

    async getOrdersBySeller(req, res) {

        try {

            const {
                seller_id
            } = req.params;

            const getOrdersBySeller = await OrderModel.find({
                seller_id
            });
            return res.status(200).json({
                totalOrders: getOrdersBySeller.length,
                getOrdersBySeller
            });

        } catch (error) {
            return res.status(404).json({
                error,
                message: 'Without orders!'
            });

        }

    }

    async cancelOrder(req, res) {

        try {

            const {
                order_id
            } = req.params;

            const findOrder = await OrderModel.findById(order_id);

            if (!findOrder) {
                return res.status(404).json({
                    message: 'Order not found!'
                });
            }

            const cancelOrder = await OrderModel.updateOne({
                ...findOrder,
                status: 'CANCELED'
            });
            return res.status(200).json({
                message: 'Order canceled with successfuly!',
                cancelOrder
            });

        } catch (error) {
            return res.status(404).json({
                error,
                message: 'Error in canceled order'
            });

        }

    }


}
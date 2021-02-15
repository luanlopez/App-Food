const {
    Schema,
    model
} = require('mongoose')

const OrderSchema = new Schema({
        seller_id: {
            type: String,
            required: true
        },
        store_id: {
            type: String,
            required: true
        },
        client_id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['PAYMENT-PENDING', 'PAYMENT-APPROVED', 'READY-FOR-HANDLING', 'HANDLING', 'INVOICED', 'CANCELED', 'SHIPPED', 'DELIVERED'],
        },
        shipping_address_code: {
            type: Number,
            required: true,
        },
        shipping_address: {
            type: String,
            required: true,
        },
        shipping_address_number: {
            type: String,
            required: true,
        },
        shipping_address_refence: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    }

)

module.exports = model("Order", OrderSchema);
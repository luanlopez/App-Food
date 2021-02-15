const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  store_id: {
    type: String, // Sujeito a mudança para number
    required: true,
  },
  seller_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Product', ProductSchema);

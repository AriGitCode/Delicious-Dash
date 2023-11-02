const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
        },
        items: [
            {
                type: Array,
                required: true,
            },
        ],
        address: {
            type: String,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        paidThrough: {
            type: String,
        }
    },
    {
        timestamps: true // Corrected placement of timestamps option
    }
);

const Order = mongoose.model("Order", orderSchema, "orders");

module.exports = Order; 
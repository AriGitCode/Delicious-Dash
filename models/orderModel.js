const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User",
      },
      menuItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "MenuItem",
        
        },
      ],
      shippingAddress: {
        address: { type: String, required: true },
      },
      paymentMethod: {
        type: String,
        required: true,
      },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
     
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Order", orderSchema);
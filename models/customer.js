const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true, unique: true},
   email: {type: String, required: true, unique: true},
   password: {type: String, required: true, minlength: 8}

  });


  const Customer = mongoose.model("Customer",customerSchema,"customers");

  module.exports = {Customer};


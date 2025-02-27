const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    medicineList: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Order = model("Order", orderSchema);

module.exports = Order;

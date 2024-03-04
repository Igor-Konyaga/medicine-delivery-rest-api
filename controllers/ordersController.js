const Order = require("../models/orderModel");
const { HttpError } = require("../utils/httpError");

exports.getOrders = async (_, res) => {
  try {
    const orders = await Order.find();

    res.status(201).json({
      ResponseBody: { message: "Success", orders },
    });
  } catch (error) {}
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);

    res.status(201).json({ message: "Success", newOrder });
  } catch (error) {}
};

const { HttpError } = require("../utils/httpError");
const Shops = require("../models/shopsModel");

exports.getShops = async (_, res) => {
  try {
    const shops = await Shops.find();

    res.status(201).json({
      ResponseBody: { message: "Success", shops },
    });
  } catch (error) {}
};

exports.createShop = async (req, res) => {
  try {
    const newShop = await Shops.create(req.body);

    res.status(201).json({ message: "Success", newShop });
  } catch (error) {}
};

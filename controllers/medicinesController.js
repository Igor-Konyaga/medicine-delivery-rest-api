const { HttpError } = require("../utils/httpError");

const Medicines = require("../models/medicinesModel");

exports.getAllMedicine = async (req, res, next) => {
  try {
    const allMedicine = await Medicines.find();

    res.status(201).json({ message: "success", allMedicine });
  } catch (error) {
    next(error);
  }
};
exports.medicines = async (req, res, next) => {
  try {
    const { shopId } = req.body;

    if (shopId) {
      const medicines = await Medicines.find({ owner: shopId });

      res.status(200).json({ message: "success", medicines });
      return;
    }
    const newMedicine = await Medicines.create(req.body);

    res.status(201).json({ message: "success", newMedicine });
  } catch (error) {
    next(error);
  }
};

exports.deleteMedicine = async (req, res, next) => {
  try {
    const { medicineId } = req.params;

    const deleteMedicine = await Medicines.findByIdAndDelete(medicineId);

    if (!deleteMedicine) throw new HttpError(404, "Not Found");

    res.status(200).json({ message: "medicine deleted" });
  } catch (error) {
    next(error);
  }
};

const express = require("express");

const {
  medicines,
  deleteMedicine,
  getAllMedicine,
} = require("../../controllers/medicinesController");

const router = express.Router();

router.get("/", getAllMedicine);

router.post("/", medicines);

router.delete("/:medicineId", deleteMedicine);

module.exports = router;

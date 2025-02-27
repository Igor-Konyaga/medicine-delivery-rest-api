const express = require('express');

const {
  getMedicinesByShop,
  deleteMedicine,
  getAllMedicine,
} = require('../../controllers/medicinesController');

const router = express.Router();

router.get('/', getAllMedicine);

router.post('/', getMedicinesByShop);

router.delete('/:medicineId', deleteMedicine);

module.exports = router;

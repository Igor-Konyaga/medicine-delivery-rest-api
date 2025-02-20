const express = require('express');

const { getShops, createShop } = require('../../controllers/shopsController');

const router = express.Router();

router.get('/', getShops);
router.post('/', createShop);

module.exports = router;

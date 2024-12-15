const express = require('express');
const router = express.Router();
const { fetchEntireFood, fetchRecipe } = require('../controller/foodController');

router.route('/').get(fetchEntireFood);
router.route('/:id').get(fetchRecipe);

module.exports = router;

const express = require('express');
const { registerController } = require('../controllers/authController');

const router = express.Router();  //express le router lai call garya

//route
//Register||post
router.post('/register', registerController);

module.exports = router; //router lai export garne
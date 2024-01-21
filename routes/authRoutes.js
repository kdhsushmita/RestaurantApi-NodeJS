const express = require('express');
const { registerController, loginController } = require('../controllers/authController');

const router = express.Router();  //express le router lai call garya

//route
//Register||post
router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router; //router lai export garne
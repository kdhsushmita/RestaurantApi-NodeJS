const express = require('express');
const { userController } = require('../controllers/userController');
const authMiddlewareHandler = require('../middleware/authMiddleware');
const router = express.Router();

//routes
//GET USER || GET
router.get('/getUser', authMiddlewareHandler, userController)

module.exports = router;
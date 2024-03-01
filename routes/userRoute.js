const express = require('express');
const { userController, userUpdateController, updatePasswordController, resetPasswordController, deleteProfileController, } = require('../controllers/userController');
const authMiddlewareHandler = require('../middleware/authMiddleware');
const router = express.Router();

//routes
//GET USER || GET
router.get('/getUser', authMiddlewareHandler, userController)

router.put('/updateUser', authMiddlewareHandler, userUpdateController)

//password update
router.post("/updatePassword", authMiddlewareHandler, updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", authMiddlewareHandler, resetPasswordController);

// delete USER
router.delete("/deleteUser/:id", authMiddlewareHandler, deleteProfileController);


module.exports = router;
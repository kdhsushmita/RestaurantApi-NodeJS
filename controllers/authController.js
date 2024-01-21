const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    console.log('Inside registerController');
    try {
        const { username, email, password, phone, address } = req.body;
        if (!username || !email || !password || !phone || !address) {
            return res.status(500).send({
                success: false,
                message: "Please provide all data"
            })
        }
        const existing = await userModel.findOne({ email })
        if (existing) {
            return res.status(500).send({
                success: false,
                message: "Email already registered please login"
            })
        }

        const hashpassword = await bcrypt.hash(password, 10);
        //create new user
        const user = await userModel.create({
            username,
            email,
            password: hashpassword,
            address,
            phone
        })
        res.status(201).send({
            success: true,
            message: "Successfully registered"
        })
    }
    catch (e) {
        console.log(e)
        res.status(500).send({
            success: false,
            message: "Error in register api",
            error
        })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "fill all the field",
                error
            })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "No user exits",
                error
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Invalid credentials"
            })
        }

        //pw match bhayo aba token create garne
        //sign - to encrypt
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "15d"
        }
        )
        res.status(200).send({
            success: true,
            message: "Login successfully",
            token,
            user
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Error in login api",
            error
        })
    }
}

module.exports = { registerController, loginController }
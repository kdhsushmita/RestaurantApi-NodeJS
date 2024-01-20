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
        //create new user
        const user = await userModel.create({
            username,
            email,
            password,
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
            message: "Error in register api"
        })
    }
}

module.exports = { registerController }
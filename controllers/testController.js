const testController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: 'test user Data api'
        })
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = { testController }
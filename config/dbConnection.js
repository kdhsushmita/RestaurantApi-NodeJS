const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection to database successfull.${connect.connection.host} ${connect.connection.name}`)
    }
    catch (e) {
        console.log(e)
    }
}


module.exports = connectDb;
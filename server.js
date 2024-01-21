const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/dbConnection');

//dotenv config
dotenv.config();

//dbConnection
connectDb();

//middleware
app.use(cors());
app.use(express.json())  //USER KO INPUT CONVERT GARNE
app.use(morgan('dev'))  //KUN API HIT BHO

//route
app.use('/api/v1/test', require("./routes/testRoutes"));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use('/api/v1/user', require("./routes/userRoute"));
app.get('/', (req, res) => {
    res.status(200).send('hello')
})

//PORT
const PORT = process.env.PORT || 8080;

//LISTEN
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
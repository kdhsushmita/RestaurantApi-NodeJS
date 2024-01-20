const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        address: {
            type: Array,
            required: [true, "Address is required"]
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"]
        },
        usertype: {
            type: String,
            required: [true, "UserType is required"],
            default: "client",
            enum: ['client', 'admin', 'vendor', 'driver']
        },
        profile: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)
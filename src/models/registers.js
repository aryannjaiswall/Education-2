const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    suggest: {
        type: String,
        required: true,
        unique: true
    }
});

// now we need to create a collection

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/CourseRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`Connection Successful Yeah!`);
}).catch((error) => {
    console.log(error)
})
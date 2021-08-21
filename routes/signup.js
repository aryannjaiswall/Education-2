var express = require('express');
var router = express.Router();
var app = express();

require("../src/db/conn")
const Register = require("../src/models/registers")

app.use(express.json())
app.use(express.urlencoded({extended: false}))


/* GET users listing. */
router.post('/', async(req, res, next) => {
  
    try{
        const studentCourse = new Register({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            age: req.body.age,
            topic: req.body.topic,
            suggest: req.body.suggest
        })
        const registered = await studentCourse.save();
        res.status(201).send("Done Successfully")
      
    } catch(error){
        res.status(400).send(error)
    }
});

module.exports = router;
const express = require('express');
const Ajv = require('ajv');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const uploadDir = path.join(__dirname, '../public/uploads/');
const upload = multer({ dest: uploadDir });

const ajv = new Ajv();

// відправка сторінки з шаблону ejs браузеру
router.get('/', (req, res) => {
    res.render('page');
});

const schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "surname": {
            "type": "string"
        },
        "age": {
            "type": "string"
        },
         "city": {
            "type": "string"
        },
        "street": {
            "type": "string"
        },
        "ap": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "email": {
            "type": "string"
        }
    },
    "required": ["name", "surname", "age", "city", "street", "phone", "email"]
};

// отримання запиту від браузера, валідація інформації та відправка результата браузеру
router.post('/add', upload.none(), (req, res) => {
    const data = req.body;
    console.log(data);
    const validate = ajv.compile(schema);
    const valid = validate(data);
    console.log('valid= ', valid);
    console.log('errors: ', validate.errors);
    if (!validate.errors) {
        res.send('OK !!!');
    } else {
        res.send(validate.errors);
    }
        
  });

module.exports = router;
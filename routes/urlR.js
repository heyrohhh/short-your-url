const express = require('express');
const {generatenewurl} = require('../controllers/urlC')
const router = express.Router();

router.post('/',generatenewurl);
module.exports =router;
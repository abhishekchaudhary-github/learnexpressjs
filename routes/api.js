const express = require('express')
const router = express.Router();
const {get,put,post} = require('../controllers/apiController')
router.get('/',get)
router.use(express.json())
router.post('/',put)
router.put('/:id',post)

module.exports = router
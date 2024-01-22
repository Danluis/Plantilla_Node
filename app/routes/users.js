const express = require('express')
const router = express.Router()
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/user')
const checkOrigin = require('../middleware/origin')

router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', checkOrigin,createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router
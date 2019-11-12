var express = require('express')
var router = express.Router()
var Todo = require('../models/virus')

// List
router.get('/', (req, res, next) => {
    Todo.find({}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res, next) => {
    Todo.create(req.body).then(data => {
        res.status(201).json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router
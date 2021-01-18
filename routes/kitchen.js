const express = require('express')
const router = express.Router()
const Kitchen = require('../models/kitchen')

//All kitchen

router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const kitchen = await Kitchen.find(searchOptions)
        res.render('kitchen/index', {kitchen: kitchen, searchOptions: req.query})
        
    }catch{
        res.redirect('/')
    }
})

//new dish

router.get('/new', (req, res) => {
    res.render('kitchen/new', {kitchen: new Kitchen()})
})

//create kitchen router

router.post('/', async (req, res)=> {
    const kitchen = new Kitchen({
        name: req.body.name
    })
    try{
        const newKitchen = await kitchen.save()
        //res.redirect(`kitchen/${newKitchen.id}`)
        res.redirect('kitchen')
    }catch{
        res.render('kitchen/new', {
            kitchen: kitchen,
            errorMessage: 'Erro ao criar a receita'
        })
    }
})

module.exports = router
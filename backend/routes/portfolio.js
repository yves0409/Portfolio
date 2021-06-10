const router = require('express').Router();
let Portfolio = require('../models/portfolioModel')

router.route('/').get((req,res) => {
    Portfolio.find()
    .then(portfolio => res.json(portfolio))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const {
        category,
        url,
        link1,
        title,
        description,
        frameworks
    } = req.body;

    const newPortfolio = new Portfolio({
        category,
        url,
        link1,
        title,
        description,
        frameworks 
    });

    newPortfolio.save()
    .then(()=> res.json('portfolio added'))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router;
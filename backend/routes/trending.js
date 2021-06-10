const router = require('express').Router();
let Trending = require('../models/trendingModel')

router.route('/').get((req,res) => {
    Trending.find()
    .then(trending => res.json(trending))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const {
        url,
        title,
        text,
        link
        } = req.body;

    const newTrending = new Trending({
        url,
        title,
        text,
        link
    });

    newTrending.save()
    .then(()=> res.json('trending item added'))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router;
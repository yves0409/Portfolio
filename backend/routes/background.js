const router = require('express').Router();
let Background = require('../models/backgroundModel')

router.route('/').get((req,res) => {
    Background.find()
    .then(background => res.json(background))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const {
        year,
        title,
        subtitle,
        text
    } = req.body;

    const newBackground = new Background({
        year,
        title,
        subtitle,
        text 
    });

    newBackground.save()
    .then(()=> res.json('Background added'))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router;
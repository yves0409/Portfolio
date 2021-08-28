const router = require('express').Router();
let Info = require('../models/infoModel')

router.route('/').get((req,res) => {
    Info.find()
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const {
        first_name,
        last_name,
        languages,
        location,
        services,
        bio,
        email1,
        email2,
        phone1,
        phone2,
        Address,
        PageLikes
        } = req.body;

        

    const newInfo = new Info({
        first_name,
        last_name,
        languages,
        location,
        services,
        bio,
        email1,
        email2,
        phone1,
        phone2,
        Address,
        PageLikes 
    });

    newInfo.save()
    .then(()=> res.json('info added'))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/like').put((req,res) => {
    
    const {PageLikes} = req.body;

    const updatedInfo = new Info({ PageLikes });
    
    updatedInfo.save()
        .then(()=> res.json('info updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })

module.exports = router;
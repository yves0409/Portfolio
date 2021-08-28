const router = require('express').Router();
let Like = require('../models/likeModel')

router.route('/').get((req,res) => {
    
    Like.find()
    .then(like => res.json(like))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const {
        likes
       } = req.body;

    const newLike =  new Like({
       likes
    });

    newLike.save()
    .then(()=> res.json('like added'))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/update').put( async (req,res) => {
  const newLikeCount = req.body.newLikeCount
  const id =req.body.id

  await Like.findById(id,(error,likeToUpdate) => {
    likeToUpdate.likes = newLikeCount;
    likeToUpdate.save()

  })

  res.send("updated")
})





module.exports = router;
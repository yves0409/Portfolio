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

router.route("/add").put(function(req, res) {
    
    Like.findOneAndUpdate({}, {likes:3000}, function(err, result) {
      if (result) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  });

//   router.route("/add").put(function(req, res) {
//     const {
//         likes
//        } = req.body;
//     Like.findOneAndUpdate({}, {likes}, function(err, result) {
//       if (result) {
//         res.send(result);
//       } else {
//         res.send(err);
//       }
//     });
//   });


module.exports = router;
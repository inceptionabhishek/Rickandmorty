const router = require('express').Router();
const { findById } = require('../models/favourite');
const favourite = require('../models/favourite');

router.route('/').get((req, res) => {
    favourite.find()
        .then(favourites => res.json(favourites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    favourite.find({name:req.body.name}).then(namedata=>{
        if(namedata.length>0){
            res.json('Already in favourites');
        }else{
            const name = req.body.name;
            const status = req.body.status;
            const species = req.body.species;
            const type = req.body.type;
            const location = req.body.location;
            const image = req.body.image;
            const characterID = req.body.characterID;

            const newFavourite = new favourite({
              name,
              status,
              species,
              type,
              location,
              image,
              characterID,
            });

            newFavourite
              .save()
              .then(() => res.json("Favourite added!"))
              .catch((err) => res.status(400).json("Error: " + err));
        }
    })
});


router.route("/:id").delete((req, res) => {
  favourite
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
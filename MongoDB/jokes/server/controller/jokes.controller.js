const jokes = require('../models/jokes.models');


    module.exports.createjoke = (req, res) => {
    jokes.create(req.body)
            .then(newjoke => res.json(newjoke))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }

module.exports.findjokes = (req,res) => {
    jokes.find()
    .then(alljokes => res.json({jokes : alljokes}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }))
}
module.exports.findjoke = (req, res) => {
    jokes.findOne({ _id: req.params.id })
            .then(findjoke => res.json(findjoke))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
     
     
    module.exports.updatejokes = (req, res) => {
    jokes.findOneAndUpdate(
            { _id: req.params.id },req.body,{ new: true}
        )
            .then(updatedjoke => res.json(updatedjoke))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
     
    module.exports.deletejoke = (req, res) => {
       jokes.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
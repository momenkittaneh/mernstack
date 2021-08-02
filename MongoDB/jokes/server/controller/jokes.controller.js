const jokes = require('../models/jokes.models');

module.exports.findalljokes = (req,res) => {
    jokes.find()
    .then(alljokes => res.json({jokes : alljokes}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

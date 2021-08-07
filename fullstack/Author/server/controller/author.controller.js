const {Author} = require('../models/author.models')

module.exports.createauthor = (req,res) => {
const {name} = req.body;
Author.create({name})
    .then(Author => res.json(Author))
    .catch(err => res.status(400).json(err))
}

module.exports.findauthors= (req,res) =>{
    // Author.find()
    // .then(Author => res.json(Author))
    // .catch(err => res.status(400).json(err))
    Author.find({})
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.findauthor = (req,res) =>{
    Author.findOne({_id:req.params.id})
    .then(Author => res.json(Author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateauthor =(req,res) =>{
    Author.findOneAndUpdate({_id:req.params.id},req.body,{new : true})
    .then(Author => res.json(Author))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteauthor = (req,res) =>{
    Author.deleteOne({_id:req.params.id})
    .then(Author => res.json(Author))
    .catch(err => res.status(400).json(err))
}
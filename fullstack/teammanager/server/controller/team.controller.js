const {Player} = require('../models/team.models');

module.exports.createplayer = (req,res) =>{
    const {Name,Position,Game1,Game2,Game3} = req.body
    Player.create({
        Name,Position,Game1,Game2,Game3})
        .then(player => res.json(player))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
}
module.exports.findAllPlayers = (req, res) => {
    Player.find({})
    .then(allPlayers => res.json(allPlayers))
    .catch(err => res.status(500).json(err));
};

module.exports.findaplayer= (req,res) =>{
    Player.findOne({_id:req.params.id})
    .then(Player=> res.json(Player))
    .catch(err => response.json({ message: "Something went wrong", error: err}))
}
module.exports.updateplayer = (req,res) =>{
    Player.updateOne({_id:req.params.id}, req.body, {new:true})
    .then(Player=> res.json(Player))
    .catch(err => response.json({ message: "Something went wrong", error: err}))
}

module.exports.deleteplayer =(req,res) =>{
    Player.deleteOne({_id:req.params.id})
    .then(Player=> res.json(Player))
    .catch(err => response.json({ message: "Something went wrong", error: err}))
}
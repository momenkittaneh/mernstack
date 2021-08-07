const mongoose = require('mongoose');
const Playerschema = new mongoose.Schema({

    Name :{
        type : String,
        require:[true,"Name is require"],
        minlength:[3,"NAME MUST BE AT LEAST 3CHARACTER"]
    },
    Position:{
          type:String
    },
    Gamestat:{
        Game1: {type: Number},
        Game2: {type: Number},
        Game3: {type: Number}

    }

}
    , {timestamps: true});




module.exports.Player = mongoose.model('Player', Playerschema);

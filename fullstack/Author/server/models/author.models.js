const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema ({
    name: {
        type : String,
        require: [true,"title is require "],
		minlength: [3, "The min length should be more than 3"]
    }

},
{timestamps: true}
)

module.exports.Author = mongoose.model("Author", AuthorSchema);
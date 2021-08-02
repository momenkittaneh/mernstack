const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Title: { type: String },
    Price: { type: Number },
    Desc: {type: String}
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

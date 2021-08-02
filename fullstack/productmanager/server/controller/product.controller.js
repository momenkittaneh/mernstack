const { response } = require('express');
const { Product } = require('../models/product.models');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { Title, Price,Desc } = request.body;
        Product.create({
        Title,
        Price,
        Desc
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}

module.exports.findallproduct = (request, response) => {
    Product.find()
    .then(prod => response.json(response.json(prod)))
    .catch(err => response.json({ message: "Something went wrong", error: err}))
};


module.exports.findoneproduct=(request,response) =>{
    Product.findOne({_id:request.params.id})
    .then(myproduct =>response.json({Product:myproduct}))
    .catch(err => response.json({ message: "Something went wrong", error: err}))

}
module.exports.updateproduct=(request,response) =>{
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updateproduct =>response.json({Product : updateproduct}))
    .catch(err => response.json({ message: "Something went wrong", error: err}))
}
module.exports.deleteproduct = (request,response) =>{
    Product.deleteOne({ _id: request.params.id })
    .then(removed => response.json({result:removed}))
    .catch(err => response.json({ message: "Something went wrong", error: err}))
}
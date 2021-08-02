const PersonController = require('../controller/product.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/products', PersonController.createProduct);
    app.get('/api/products', PersonController.findallproduct);
    app.get('/api/products/:id',PersonController.findoneproduct);
    app.put('/api/products/:id',PersonController.updateproduct);
    app.delete('/api/products/:id',PersonController.deleteproduct);
}

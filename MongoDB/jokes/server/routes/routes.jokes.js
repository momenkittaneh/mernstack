const jokesController = require('../controller/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', jokesController.findjokes);
    app.get('/api/jokes/:id', jokesController.findjoke);
    app.put('/api/jokes/:id', jokesController.updatejokes);
    app.post('/api/jokes/new', jokesController.createjoke);
    app.delete('/api/jokes/:id', jokesController.deletejoke);
}
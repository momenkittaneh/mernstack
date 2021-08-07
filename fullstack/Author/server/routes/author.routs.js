const Author = require('../controller/author.controller')

module.exports = function(app){

    app.get('/api/authors',Author.findauthors),
    app.post('/api/authors',Author.createauthor),
    app.get('/api/authors/:id',Author.findauthor),
    app.put('/api/authors/:id',Author.updateauthor),
    app.delete('/api/authors/:id',Author.deleteauthor)
    
}
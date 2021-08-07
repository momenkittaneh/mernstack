const playcont = require("../controller/team.controller")

module.exports = (app) =>{
    app.get('/api/player',playcont.findAllPlayers),
    app.post('/api/player',playcont.createplayer),
    app.get('/api/player/:id',playcont.findaplayer),
    app.put('/api/player/:id',playcont.updateplayer),
    app.delete('/api/player/:id',playcont.deleteplayer)


}
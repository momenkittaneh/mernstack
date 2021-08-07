import './App.css';
import React, {useState} from 'react';

import Header from './components/Header';
import { Router } from '@reach/router';
import Playerlist from './components/Playerlist'
import Createplayer from './components/createplayer'
import Gamestatus from './components/Gamestatus'
function App() {

  const [player, setplayer] = useState([]);

  return (
    <div className="App">
        <Header />
        <Router>
        <Playerlist path="players/list"  />
        <Createplayer path= "players/addplayer"  player={player} setPlayer={setplayer}/>
        <Gamestatus path="/status/games/:gameId" player={player} setPlayer={setplayer} />
        </Router>
        
    </div>
  );
}

export default App;

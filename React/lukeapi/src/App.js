import './App.css';
import Home from './components/Home';
import People from './components/People';
import {Router} from '@reach/router';
import Planets from './components/Planets';
function App() {
  return (
    <div className="App">
        <Home />
        
        <Router>
        <People path="/people/:id/" />
        <Planets path='/planets/:id' />
        </Router>
    </div>
  );
}

export default App;

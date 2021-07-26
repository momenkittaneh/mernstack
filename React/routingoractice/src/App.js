import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/home';
import Firstroute from './components/Firstroute';
import Styleroute from './components/styleroute';


function App() {
  return (
    <div className="App">
         <div className="App">
        <Router>
          <Home path ="/home" />
          <Firstroute path= "/:nano" />
          <Styleroute path ="/:nano/:fontco/:bacol" />
        </Router>
    </div>

    </div>
  );
}

export default App;
